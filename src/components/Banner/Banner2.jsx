import sateliteImg2 from '../../assets/satelite2.jpg'

const Banner2 = () => {
  return (
    <div className="bg-black text-white pb-12 py-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center ">
            <div className='space-y-10 xl:pr-36 p-4 border-r-2 
            border-l-sky-800 border-b-sky-800'>
            <div>
                <p className='text-sky-800 uppercase'>Our Mission</p>
                <h1 className='uppercase'>Rapidcast</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Debitis in assumenda fugiat, facere adipisci labore rerum a ex libero, 
                    error obcaecati voluptates quis delectus amet fuga similique 
                    rem quisquam inventore.
                </p>
                <button className='primary-button'>Learn More</button>
            </div>
            </div>
            <div>
             <img src={sateliteImg2} alt=""/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2