import { useEffect, useState } from "react";

import axios from "axios";

const useGetDetails = (url) => {
  const [details, setDetails] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  const loadDetails = async () => {
    try {
        const res = await axios.get(url);
        // console.log( res.data)
        setDetails( res.data)
        // console.log(details);
        setLoading(false);
    } catch(error) {
        // console.log(error);
        setError('error from')
        setLoading(false);
    }
    };

  useEffect(()=>{
  
        loadDetails();
    }, [url])

    return [loading, error, details];
};

export default useGetDetails;