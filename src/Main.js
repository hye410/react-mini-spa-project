import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Reservation from './pages/Reservation';
import Post from './pages/Post';
import Map from './pages/Map';
import Error from './pages/Error';
import Toy from "./pages/Toy";
import DetailInfo from "./pages/DetailInfo";
import ToyDetail from "./pages/ToyDetail";
import Toy2 from "./pages/Toy2";

function Main(){
  return(
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/reservation" element={<Reservation />}/>
          <Route path="/post">
            <Route index element={<Post />}/>
            <Route path="/post/:id" element={<DetailInfo />}/>
          </Route>
          <Route path="/map" element={<Map />}/>
          <Route path="/error" element={<Error />}/>
          {/* <Route path="/toy" element={<Toy />} /> */}
          <Route path="/toy">
            <Route index element={<Toy />} />
            <Route path="/toy:id" element={<ToyDetail />} />
          </Route>
          <Route path="/toy2" element={<Toy2 />} />
        </Routes>
      </App>
    </BrowserRouter>
  )
}

export default Main;