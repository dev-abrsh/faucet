import { API } from "faucetpayjs";
import { useEffect } from "react";

function App() {
  const myAPI = new API(process.env.API_KEY);
  useEffect(() => {
    myAPI.getBalance().then((data) => {
      console.log(data);
    });
  });
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
