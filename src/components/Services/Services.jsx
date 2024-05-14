import { FaReact, FaSearchLocation, FaSpaceShuttle, } from "react-icons/fa";
import wave from '../../assets/wave Gif.gif'

const ServiceData = [
  {
    title: "HST",
    content: "300-1500km",
    description:
      "used for astrological observations,capturing stunning images of the universe ",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "ISS",
    content: "300-1500km",
    description:
      "used for astrological observations,capturing stunning images of the universe ",
    icon: <FaSpaceShuttle className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "GPS",
    content: "300-1500km",
    description:
      "used for astrological observations,capturing stunning images of the universe ",
    icon: <FaSearchLocation className="text-7xl" />,
    aosDelay: "700",
  },
];

const Services = () => {
  return (
   
    <div className="bg-black text-white relative z-50">
      <div className="container">
        <div className="min-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            {ServiceData.map((data, index) => (
              <div key={index} className='min-h-[180px] gap-2 flex flex-col justify-center 
              items-center rounded-xl bg-sky-900/60 rounded-xl backdrop-blur-sm 
              text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto text-white'>
                {data.icon}
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <p className="text-sm">{data.description}</p>
                <p>{data.aosDelay}</p>
              </div>
            ))}
          </div>
          <img src={wave} alt="wave"
              className="h-[150px] w-full object-cover mix-blend-screen-translate-y-24 relative z-[0]"/>
              <div className="absolute bottom-0 w-full bg-gradient-to-b 
              from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px] z-30">
              </div>
        </div>
      </div>
    </div>
   
  );
};

export default Services;
