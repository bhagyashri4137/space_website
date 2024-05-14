import sateliteImg from '../../assets/satelite1.jpg'
const Banner = () => {
  return (
    <div className="bg-black text-white pb-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div>
             <img src={sateliteImg} alt=""/>
            </div>
            <div className='space-y-3 xl:pr-36 p-4 border-r-2 
            border-r-sky-800 border-b-sky-800'>
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
        </div>
      </div>
    </div>
  );
};

export default Banner;
