import { useState, useEffect } from "react";

const useFetch = (apiUrl) => {
  // State for data, loading status, and error
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setTimeout(() => {
      // Simulated fetch with a delay
      fetch(apiUrl)
        .then((res) => {
          if (!res.ok) {
            throw Error("Couldn't fetch data from that resource");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }, 1000);

    return ()=>console.log('clean up')
    
  }, [apiUrl]); // Effect runs when apiUrl changes

  return { data, isLoading, error }; // Return data for external use
};

export default useFetch;
