import React from 'react'

const FoodBean = () => {
   
  return (
  <section 
      className="relative w-full py-24 lg:py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ 
        
        backgroundImage: "url('/assets/images/Food/unsplash_E6DsqnZbZ4o.png')" 
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-24 flex flex-col lg:items-end text-center lg:text-right">
        
        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-2xl">
          <span className="text-[#27A599]">We</span> Document Every Food <br />
          Bean Process until it is saved
        </h2>

        <p className="text-gray-300 text-base lg:text-lg mb-10 max-w-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque diam pellentesque bibendum non dui volutpat fringilla 
          bibendum. Urna, elit augue urna, vitae feugiat pretium donec 
          id elementum.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-8">
          
          <button className="border border-[#27A599] text-white px-10 py-3 rounded-full font-bold hover:bg-[#27A599] transition-all duration-300">
            Read More
          </button>

          <div className="flex items-center gap-4 cursor-pointer group">
            {/* أيقونة التشغيل الدائرية */}
            <div className="w-14 h-14 bg-white/10 border border-[#27A599] rounded-full flex items-center justify-center group-hover:bg-[#27A599] transition-all duration-300">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-14 border-l-[#27A599] border-b-8 border-b-transparent ml-1 group-hover:border-l-white transition-colors duration-300"></div>
            </div>
            {/* نص الزر */}
            <span className="text-white font-bold text-lg">Play Video</span>
          </div>

        </div>

      </div>
    </section>
  )
}

export default FoodBean