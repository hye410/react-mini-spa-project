import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App({children}) {

  return (
    <>
    <Header />
    <Nav />
    {children}
    <Footer />
    </>
  );
}

export default App;
