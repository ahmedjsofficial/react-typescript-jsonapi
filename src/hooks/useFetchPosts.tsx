import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface ApiResponse<T> {
  data: T;
  isLoading: boolean;
  error: string | null;
}


export default function useFetchPosts<T>(req: string): ApiResponse<T> {
  const [data, setData] = useState<T>(() => ([] as unknown as T));
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${req}`)
      .then((response: AxiosResponse<T>) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [req]);

  return {
    data,
    isLoading,
    error,
  };
}
