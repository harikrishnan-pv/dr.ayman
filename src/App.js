import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import Arabic from "./Home Arabic";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Arabic/>}/>
        <Route path="/en" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
