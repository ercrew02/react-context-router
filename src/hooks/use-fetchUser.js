import { useDispatch } from 'react-redux';
import { setUser } from '../store/fetchUser-slice';

function useFetchUser() {
  const dispatch = useDispatch();

  const fetchUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    dispatch(setUser(data));
  };

  return { fetchUser };
}

export default useFetchUser;
