import { useState } from "react";
import "./App.css";
import Body from "./components/common/Body";
import Login from "./pages/Login";


function App() {
  const [count, setCount] = useState(0);
  return <Body><Login/></Body>;
}

export default App;
