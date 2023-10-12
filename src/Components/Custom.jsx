import React, { useEffect, useState } from 'react';


function Custom() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://restcountries.com/v3.1/all');
      const datos = await res.json();
      setData(datos);
    }
    getData();
  }, []);

  console.log(data);

  return data;
}

export default Custom;
