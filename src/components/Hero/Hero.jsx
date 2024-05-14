import mountain from '../../assets/moon-surface-hd.png'

import bgVideo from '../../assets/earth-bg.mp4'

const Hero = () => {
  return (

    <>
<div className='absolute h-screen w-full'>
     <video autoPlay loop muted className='h-screen w-full object-cover z[-1]'>
      <source src={bgVideo} type='video/mp4'/>
     </video>
  </div>

  <div className="bg-black/20 text-white relative z-50 h-screen">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
         <div className="space-y-4 lg:pr-36">
           <h1 className="text-5xl font-bold uppercase">Orbit the Earth</h1>
           <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Mollitia soluta iure obcaecati eos quis ab excepturi 
            temporibus, dolor aliquid. 
            Nesciunt accusantium quos ipsa ipsum atque hic optio eos aperiam est.
           </p>
           <button className='primary-button'>Learn more</button>
         </div>
        </div>
      </div>
      {/* surface section */}
      <img src={mountain} alt=""
      className='absolute right-0 bottom-0 w-full brightness-50 z-30 bg-gradient-to-b from-transparent to-black to-90% h-[50px] sm:h-[50px] md:[60px]'/>
    </div>
    </>
  )
} 

export default Hero