import hero from '../assets/images/hero.jpg'
import TopDestinations from '../components/TopDestinations'
import HiddenWonders from '../components/HiddenWonders'

const Home = () => {
  return (
    <>
      <div className="relative h-screen bg-cover bg-center" style={{backgroundImage :`url(${hero})`}}>
        <div className='absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'> Discover new adventures with us </h1>
          <p className='text-lg md:text-2xl text-white mb-8'>Explore amazing places at exclusive deals</p>
          <button className='border text-white px-5 py-1 rounded-full text-lg md:text-xl
          hover:bg-teal-900 transform 
          translation duration-300 hover:scale-105'>Explore Now</button>
        </div>
      </div>
      <TopDestinations/>
      <HiddenWonders/>
    </>
  )
}

export default Home