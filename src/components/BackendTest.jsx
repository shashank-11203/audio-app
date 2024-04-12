import React,{useState,useEffect} from 'react'

const BackendTest = () => {

  const [data, setData] = useState({})

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async() => {
    const response = await fetch('http://127.0.0.1:5000/data')
    const jasonData = await response.json()
    setData(jasonData)
  }

  return (
    <div>{data.message}</div>
  )
}

export default BackendTest