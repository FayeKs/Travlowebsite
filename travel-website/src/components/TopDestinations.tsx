import amalfi from '../assets/images/amalfi.jpg'
import london from '../assets/images/london.jpg'
import nyc from '../assets/images/nyc.jpg'
import tokyo from '../assets/images/tokyo.jpg'



const TopDestinations = () => {
    const destinations = [
        {
            image:  amalfi,
            title: 'Amalfi Coast, Italy',
            description: ''
        },
        {
            image: nyc,
            title: 'New York, USA',
            description:''
        },
        {
            image: london,
            title: 'London, England',
            description: ''
        },
        {
            image: tokyo,
            title: 'Tokyo, Japan',
            description: ''
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
                        <p>{city.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopDestinations