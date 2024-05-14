import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'

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
  <Navbar/>
  <Hero/>
   <Services/>
   <Banner/>
   <Banner2/>
   <Footer/>
</div>
  )
}

export default App