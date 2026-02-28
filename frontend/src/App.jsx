import axios from './api/AxiosConfig';
import { useEffect } from 'react'

const App = () => {

  const getProducts=async ()=>{
    try{
      const res=await axios.get("/products")
      console.log(res);
      
    }catch(err){
      console.log(err);
      
    }
  }

  useEffect(()=>{
    getProducts()
  },[])
  
  return (
    <div  className='text-5xl'>get products</div>
  )
}

export default App