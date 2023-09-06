import "bootstrap/dist/css/bootstrap.min.css"
import NavigationBar from "./components/Navigationbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import ContactUs from "./pages/contact_us";
import AboutUs from "./pages/about_us";
import ClassState from "./pages/ClassState";
import FunctionalState from "./pages/FunctionalState";
import BasicFormHandling from "./pages/BasicFormHandling";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>

      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<AboutUs></AboutUs>}></Route>
      <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
      <Route path="/classState" element={<ClassState></ClassState>}></Route>
      <Route path="/functionalUseState" element={<FunctionalState></FunctionalState>}></Route>
      <Route path="/basicFormHandling" element={<BasicFormHandling></BasicFormHandling>}></Route>

    </Routes>
    </BrowserRouter>
    
      <h1 className="text-warning">Hello World</h1>
      </>
  );
}

export default App;
