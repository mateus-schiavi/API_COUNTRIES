import React from 'react'
import Filter from './Components/Filter'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(null)

  const getData = async()=>{
    const res = await fetch (
      "https://restcountries.com/v3.1/all"
    )
    const datos = await res.json()
    setData(datos)

    return datos
  }
    getData()

  return (
    <div>
      <h1>Filtro de Países</h1>
      <Filter/>
    <div>
      {datos.map((pais)=>{
        console.log(pais)
      })}
    </div>
    </div>
  )
}

export default App