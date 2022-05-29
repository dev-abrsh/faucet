import axios from 'axios'
import { useEffect } from "react";

function App() {
  
  useEffect(() => {
   function fetchData() {
     
 axios.post('https://faucetpay.io/api/v1/getbalance', {
     "api_key": "c2aad08e717a2fc7a3bd50f3775ae609a6762819"
   }).then(res=>console.log(res)).catch(err=>console.log(err))

  }
  fetchData()
  },[]);
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
