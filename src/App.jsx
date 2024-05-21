import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
//import { BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <div className=''>
     <video autoPlay loop muted className='right-0 top-0 h-[100[vh] w-full object-cover z[-1]'>
      <source src={bgVideo} type='video/mp4'/>
     </video>
     <Navbar />
     <Hero />
  </div> */}
      {/* <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Hero />}/>
          <Route path='/' element={<Services />}/>
          <Route path='/' element={<Banner />}/>
          <Route path='/' element={<Banner2 />}/>
          <Route path='/' element={<Footer />}/>
        </Routes>
      </BrowserRouter> */}
    <Navbar />
    <Hero />
    <Services />
    <Banner />
    <Banner2 />
    <Footer />
    </div>
  );
};

export default App;
