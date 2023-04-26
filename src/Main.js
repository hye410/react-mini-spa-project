import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Reservation from './pages/Reservation';
import Post from './pages/Post';
import Map from './pages/Map';
import Error from './pages/Error';
import Toy from "./pages/Toy";

function Main(){
  return(
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/reservation" element={<Reservation />}/>
          <Route path="/post" element={<Post />}/>
          <Route path="/map" element={<Map />}/>
          <Route path="*" element={<Error />}/>
          <Route path="/toy" element={<Toy />} />
        </Routes>
      </App>
    </BrowserRouter>
  )
}

export default Main;