import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { useState } from 'react';

function App({children}) {

  const [toggle,setToggle] = useState(false);
  const reset = () => {
    setToggle(false);
  }

  return (
    <>
    <Header toggle={toggle} setToggle={setToggle} reset={reset}/>
    <Nav toggle={toggle} setToggle={setToggle} reset={reset}/>
    {children}
    <Footer />
    </>
  );
}

export default App;
