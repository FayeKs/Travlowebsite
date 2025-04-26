import amalfi from '../assets/images/amalfi.jpg'
import london from '../assets/images/london.jpg'
import nyc from '../assets/images/nyc.jpg'
import tokyo from '../assets/images/tokyo.jpg'



const TopDestinations = () => {
    const destinations = [
        {
            image:  amalfi,
            title: 'Amalfi Coast, Italy',
            description: 'A stunning seaside gem on Italy’s southern coast, Amalfi charms with its colorful cliffside villages, crystal-clear waters, and rich Mediterranean culture.'
        },
        {
            image: nyc,
            title: 'New York, USA',
            description:'The city that never sleeps — NYC pulses with energy, iconic landmarks, world-class dining, and endless entertainment in every neighborhood.'
        },
        {
            image: london,
            title: 'London, England',
            description: 'A perfect mix of history and modern flair, London offers royal palaces, cozy pubs, cutting-edge fashion, and global cuisine all in one city.'
        },
        {
            image: tokyo,
            title: 'Tokyo, Japan',
            description: 'Where ancient tradition meets futuristic innovation — Tokyo dazzles with neon-lit streets, serene temples, and an unforgettable food scene.'
        }
    ]
  return (
    <div className='py-12 bg-gray-100 px-4'>
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-8'>Top Destinations</h2>
        </div>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {destinations.map((city, index) => (
                <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'>
                    <img src={city.image} alt="" className='w-full h-48 object-cover transform transition duration-300 hover:scale-110'/>  
                    <div className='p-4'>
                        <h3 className='text-xl font-bold mb-2'>{city.title}</h3>
                        <p className='text-sm'>{city.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopDestinations