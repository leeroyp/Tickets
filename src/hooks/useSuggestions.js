import { useEffect, useState} from 'react';
import stubHub from '../api/stubHub'

export default  () => { 
    const [suggestions, setSuggestions] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

  const searchSuggest = async (searchTerm2) => {
    try {
      const response = await stubHub.get("/suggest", {
        params: {
            apikey: "",
            keyword: searchTerm2,
            size: 3,
          },
      });
      console.log('Hello')
    console.log("RESULTS:",response.data._embedded.products[0])
    setSuggestions(response.data._embedded.products[0]);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() =>{
    searchSuggest("")
  })

  return [searchSuggest, suggestions, errorMessage];
}