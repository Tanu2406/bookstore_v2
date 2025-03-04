import React from 'react'

const Card = ({item}) => {
   
  return (
 <>
    <div>
    <div className="w-full px-4 md:px-6 lg:px-8 max-w-[95vw] mb-8 hover:scale-105 duration-200">
          
            <div key={item.id} className="flex justify-center">
              <div className="bg-white w-full max-w-[280px] h-[400px] mx-auto border rounded-2xl border-pink-200 shadow-lg p-4">
                {/* Image */}
                <div className="flex justify-center">
                  <img className="w-full max-h-[200px] object-contain rounded-t-2xl" src={item.img} alt={item.name} />
                </div>

                {/* Book Title and Badge */}
                <div className="flex justify-center items-center mt-3 space-x-2">
                  <p className="font-bold text-lg">{item.name}</p>
                  <button className="border border-pink-800 !bg-pink-400 hover:!bg-pink-300 text-xs px-2 py-1 text-white rounded-md">{item.category}</button>
                </div>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-4">
                  <button className="border !border-pink-400 text-xs px-2 py-1 rounded-md hover:!bg-pink-400 hover:text-white duration-200">{item.price}</button>
                  <button className="border !border-pink-400 text-xs px-2 py-1 rounded-md hover:!bg-pink-400 hover:text-white duration-200 ">{item.btn3}</button>
                </div>
              </div>
            </div>
        
      </div>
    </div>
 </>
    
  )
}

export default Card
