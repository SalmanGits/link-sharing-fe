import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx"
import Form from "./components/Form.jsx"
import Responses from "./components/Responses.jsx";
import Name from "./components/Name.jsx";
import{ Login,Signup } from "./components/Login.jsx";
import "./App.css"
import ThankYou from "./components/ThankYou.jsx";
function App() {


  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form/:id" element={<Form />} />
          <Route path="/responses" element={<Responses />} />
          <Route path="/name/:id" element={<Name />} />
          <Route path="/thank" element={<ThankYou />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
