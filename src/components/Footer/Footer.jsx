

const Footer = () => {
  return (
    <div className="bg-black text-white px-3">
        <section className="max-w-[1200px] mx-auto text-white">
            <div className="grid md:grid-cols-3 py-5">
             {/* first col */}
             <h1 className="text-xl sm:text-3xl font-bold sm:text-left
             text-justify mb-3">Be ready To Grow</h1>
             <p>Get Exclusive<span className="font-bold">best update</span>
             straight to your inbox.</p>
             <br/>
             <div>
                <input type="text"
                className="py-1 px-3 w-full h-[100%] inline-block 
                focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500
                bg-gray-1 border-gray-200 border-2"
                placeholder="Email"/>
                <button className="primary-button">Ok</button>
             </div>
             {/* second col */}
      
            </div>
        </section>
    </div>
  )
}

export default Footer