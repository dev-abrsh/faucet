import { API } from "faucetpayjs";
import { useEffect } from "react";

function App() {
  const myAPI = new API("0a4fc78441e575124ce17a1500fbc19e05d0aecd");
  useEffect(() => {
    myAPI.getBalance().then((data) => {
      console.log(data);
    });
  });
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
