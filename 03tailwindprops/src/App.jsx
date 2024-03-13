
import "./App.css";
import Card from "./components/card";

function App() {

  let myObj = {
    username: "mandavi",
    age: 21
  }
  let newArr = [1, 2, 3]
  return (
    <>
    <h1>Tailwind CSS</h1>
    <Card username = "code"/>
    <Card username = "mandavi"/>
      <Card/>
  

    </>
  );
}

export default App;
