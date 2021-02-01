import React from "react";
import "./App.css";
// importation Navbar
import X from "./Component/Navbar/Navbar";
import User from "./Component/User/User";
function App() {
  let name = "seif";
  return (
    <div>
      <p>{name.indexOf("a")}</p>
      <X />
      <X />
      <User />
      <User />
      <User />
      <User />
    </div>
  );
}

export default App;

// code JSX trying
{
  /* <div className="App">
       si limage est sous le folder src 
      <img src={logo} />
      si limage est sous le folder public 
      <img src="./logo512.png" />
      <p>{name}</p>
    </div> */
}
