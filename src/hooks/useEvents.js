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
      // console.log(response.data);
    // console.log("logging response",response);
    // console.log("logging response array",response.data._embedded.events[0]._embedded.attractions[0].classifications[0].segment.name);

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