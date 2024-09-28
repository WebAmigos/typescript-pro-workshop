import { ApiSuccess, fetchPeople, type Person } from '../services/fetchPeople';

type LoadFunction<T> = { (): Promise<ApiSuccess<T>> };

// pending
// resolved
// rejected

type Res<T> =
  | {
      // pending
      status: 'pending';
      data: undefined;
      isLoading: true;
      isError: false;
    }
  | {
      // resolved
      status: 'resolved';
      data: T;
      isLoading: false;
      isError: false;
    }
  | {
      // rejected
      status: 'rejected';
      data: undefined;
      isLoading: false;
      isError: true;
    };

const getData = async <T>(load: LoadFunction<T>): Promise<Res<T>> => {
  // let isLoading = true;
  // let isError = false;
  // let data: T | undefined;

  // load()
  //   .then((d) => {
  //     data = d;
  //   })
  //   .catch((er) => {
  //     isError = true;
  //   })
  //   .finally(() => {
  //     isLoading = false;
  //   });

  // pending
  let state: Res<T> = {
    status: 'pending',
    isLoading: true,
    isError: false,
    data: undefined,
  };

  try {
    const data = await load();

    if (data) {
      // fulfilled
      state = {
        status: 'resolved',
        data: data.results,
        isLoading: false,
        isError: false,
      };
    }
  } catch (error) {
    // rejected
    state = {
      status: 'rejected',
      isError: true,
      isLoading: false,
      data: undefined,
    };
  }

  return state;
};

// const { data, isLoading, isError } = getData<Person>(fetchPeople)
// const { data, isLoading, isError } = getData<Person>(() => fetchPerson(123))

const { data, status, isLoading, isError } =
  await getData<Person[]>(fetchPeople); //

// #1
// if (isLoading) {
//   console.log('Loading');
// }

// if (isError) {
//   console.log('Error');
// }

// const _people = data;

if (isLoading) {
  console.log('Loading');
} else if (isError) {
  console.log('Error');
} else {
  const _people = data;
}

// if (status === 'pending') {
//   console.log('Loading');
// } else if (status === 'rejected') {
//   console.log('Error');
// } else if (status === 'resolved') {
//   const people = data;
//   people.forEach((item) => {
//     console.log(item);
//   });
// }
