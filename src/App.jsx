import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx"
import Form from "./components/Form.jsx"
import Responses from "./components/Responses.jsx";

function App() {


  return (

    <div>
      <BrowserRouter>



        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/form/:id" element={<Form />} />
          <Route path="/responses" element={<Responses />} />




        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
