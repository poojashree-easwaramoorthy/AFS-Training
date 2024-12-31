import "./App.css"
import ClassCompEg from "./Components/ClassComponents/ClassCompEg";
import Navbar from "./Components/FunctionalComponents/Navbar";
import Home from "./Components/FunctionalComponents/Home";
import About from "./Components/FunctionalComponents/About";
import Gallery from "./Components/FunctionalComponents/Gallery";
import Contact from "./Components/FunctionalComponents/Contact";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App(){
  return(
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About College="Kongu Engineering" clg1="Kongu Arts" clg2="Naturopathy"/>}/>
<<<<<<< HEAD
          <Route path="/gallery" element={<Gallery/>}/>
=======
          <Route path="/g+allery" element={<Gallery/>}/>
>>>>>>> f160e5befb152c206d5910c57ad420c053507e84
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
        </div>
  )
  
}
export default App;