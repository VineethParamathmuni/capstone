import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import image from './icons_assets/Logo.svg';

function App() {
  return (
    <>
      <Header src={image}/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;