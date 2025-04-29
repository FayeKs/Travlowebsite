

const SearchBox = () => {
  return (
    <div className="bg-white rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-[2rem] mt-[1rem] w-[80%]">
        <div className="flex items-center text-left  space-x-6">
            <div>
                <p className="text-sm font-semibold mb-[0.2rem]">Location</p>
                <input className="outline-none border-none text-sm" type="text" placeholder="Where are you going?" />
            </div>
        </div>
        <div className="flex items-center text-left space-x-6">
            <div>
                <p className="text-sm font-semibold mb-[0.2rem]">Start Date</p>
                <input className="outline-none border-none text-sm" type="date"  />
            </div>
        </div>
        <div className="flex items-center text-left space-x-6">
            <div>
                <p className="text-sm font-semibold mb-[0.2rem]">End Date</p>
                <input className="outline-none border-none text-sm" type="date"  />
            </div>
        </div>
        <div className="flex items-center text-left space-x-6">
            <div>
                <p className="text-sm font-semibold mb-[0.2rem]">Guest</p>
                <p className="text-sm font-semi-bold mb-[0.2rem]"> 1 Guest 1 Room</p>
            </div>
        </div>
    </div>
  )
}

export default SearchBox