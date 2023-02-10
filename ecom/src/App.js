import logo from './logo.svg';
import './App.css';
import Counter from './Component/addCart';
import AddCounter from './Component/addCounter';
import ReduceCounter from './Component/reducerCounter';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //    <Counter/>
    //     <AddCounter/>
    //     <ReduceCounter/>

    // </div>
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<AddCounter/>}></Route>
        <Route path="/addcart" element={<Counter/>}></Route>
      
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
