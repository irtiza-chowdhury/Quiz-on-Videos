import { useEffect, useState } from 'react';

export default function useFetch(url, method, headers) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function requestFetch() {
      try {
        setError(false);
        setLoading(true);
        const response = await fetch(url, {
          method: method || 'GET',
          headers,
        });
        const data = await response.json();
        setResult(data);
        setLoading(false);
      } catch (err) {
        console.log('error', err);
        setError(true);
        setLoading(false);
      }
    }
    requestFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    loading,
    error,
    result,
  };
}
