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
          <Route path="*" element={<Error />}/>
          {/* <Route path="/toy" element={<Toy />} /> */}
          <Route path="/toy">
            <Route index element={<Toy />} />
            <Route path="/toy/:id" element={<DetailInfo />}/>
          </Route>
        </Routes>
      </App>
    </BrowserRouter>
  )
}

export default Main;