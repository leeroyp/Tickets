import { useEffect, useState} from 'react';
import stubHub from '../api/stubHub'

export default  () => { 
    const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await stubHub.get("/events", {
        params: {
          apikey: "",
          keyword: searchTerm,
          size: 100,
        },
      });
      console.log('hittttt')
      setResults(response.data._embedded.events);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() =>{
    searchApi("")
  })

  return [searchApi, results, errorMessage];
}