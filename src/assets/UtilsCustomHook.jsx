import React, { useEffect, useState } from 'react'

const useGetApiData = (url) => {
  let [data,setData]=useState({})

  useEffect(()=>{
    getData();
  },[])

  async function getData(){
    let res = await fetch(url);
    let apiData = await res.json();
    setData(apiData);
  }
  return data;
}

export default useGetApiData