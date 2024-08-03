import Link from 'next/link';
import ShimmerButton from './magicui/ShimmerButton';

const Hero = () => {
  return (
    <div className="relative bg-black text-white h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="bg-[url('/images/Lapzimages.png')] bg-cover bg-center h-full opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center justify-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Watch F1® in visionOS
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Experience Formula 1® races like never before...
        </p>
        {/* <button className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300">
          Get the TestFlight
        </button> */}
        <div className='flex justify-center'>
          <ShimmerButton shimmerDuration='1s' shimmerColor="#c3c3c3" background='#141414' className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Get the TestFlight
            </span>
          </ShimmerButton>
        </div>
      </div>

      {/* Curved lights effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-40 flex justify-between">
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 bg-white rounded-full opacity-50"
              style={{
                transform: `translateY(${Math.sin(index / 3) * 20}px)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;