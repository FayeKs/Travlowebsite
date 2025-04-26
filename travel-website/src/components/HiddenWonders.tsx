import hidden from '../assets/images/hidden.jpg'

const HiddenWonders = () => {
  return (
    <div className="py-12 px-4 ">
        <div>
         </div>
         <div className="flex ">  
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-left mb-8"> Explore the World's <span className="text-teal-900">Hidden</span> Wonders </h2>
            <p className="text-sm">Step off the beaten path and uncover breathtaking places most travelers miss. From secret beaches to tucked-away mountain villages, we’ll guide you to the world’s best-kept travel secrets.</p>
            <button className="text-sm border text-white bg-teal-900 px-3 py-1 rounded-full m-4
         ">Discover Hidden Gems</button>
          </div>
          <div className='w-1/2 lg:w-1/5'>
            <img src={hidden} alt="" className='w-full h-50'/>
          </div>
        </div>
    </div>
  )
}

export default HiddenWonders