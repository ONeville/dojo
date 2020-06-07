
import { useState, useEffect } from "react";
import axios from "axios";

export const useHttpGet = (url, deps = []) =>{
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

    // useEffect(() => {
    //   setIsLoading(true);
    //   axios.get(url).then(res=>{
    //     setData(res.data);
    //     setIsLoading(false);
    //   }).catch(err => {
    //     console.log(err);
    //     setIsLoading(false);
    //   })
    // return () => {
    // //   dataSlice = null;
    // };
    // }, [url, ...deps]);

  useEffect(() =>{
                         setIsLoading(true);
                         
  const fetchData = async () => {
                         try {
                           const response = await axios.get(url);
                           setData(response.data);
                           setIsLoading(false);
                         } catch (error) {
                           console.log(error);
                           setIsLoading(false);
                         }
  };
  fetchData();

                       }, [url, ...deps]);

  return [isLoading, data];
}