import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [data, setData] = useState({
    title: '',
    teste: '2'
  });

  async function getData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <h1>Hello world from gh pages</h1>
      <h1>Teste</h1>
      {data && <h1>{data.title}</h1>}
    </>
  )
}

export default App
