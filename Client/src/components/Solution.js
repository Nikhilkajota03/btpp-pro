import React from 'react'
import Image1 from "../image/unspash.avif";
import Image2 from "../image/blockchain.avif"
import Image3 from "../image/Suyash.jpg"
import Image4 from "../image/block.png"
import Herosection from './Herosection';
const Solution = () => {
  return (
    <>
    {/* <Herosection/> */}
    <section  className="bg-purple-900  bg-gradient-to-b from-purple-800 via-purple-800 to-gray-900 bottom-0 leading-5 h-full w-full ">
    <div className='text-center pt-[5rem] text-4xl font-bold text-white'>Our Solution</div>
  <div
    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
   

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
      <a
        className="block rounded-xl flex flex-col text-center p-8 shadow-2xl transition hover:border-yellow-800/20 hover:shadow-yellow-400/20"
        href="/services/digital-campaigns">
       <img src={Image1} className='w-[80%] h-[18rem] ml-auto mr-auto' alt="" />

        <h2 className="mt-4 text-3xl font-bold text-white">Digital campaigns</h2>

        <p className="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
          possimus adipisci distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>
      <a
        className="block rounded-xl flex flex-col text-center p-8 shadow-2xl transition hover:border-yellow-800/20 hover:shadow-yellow-400/20"
        href="/services/digital-campaigns">
       <img src={Image2} className='w-[80%] h-[18rem] ml-auto mr-auto' alt="" />

        <h2 className="mt-4 text-3xl font-bold text-white">Digital campaigns</h2>

        <p className="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
          possimus adipisci distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>
      <a
        className="block rounded-xl flex flex-col text-center p-8 shadow-2xl transition hover:border-yellow-800/20 hover:shadow-yellow-400/20"
        href="/services/digital-campaigns">
       <img src={Image2} className='w-[80%] h-[18rem] ml-auto mr-auto' alt="" />

        <h2 className="mt-4 text-3xl font-bold text-white">Digital campaigns</h2>

        <p className="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
          possimus adipisci distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>
      <a
        className="block rounded-xl flex flex-col text-center p-8 shadow-2xl transition hover:border-yellow-800/20 hover:shadow-yellow-400/20"
        href="/services/digital-campaigns">
       <img src={Image2} className='w-[80%] h-[18rem] ml-auto mr-auto' alt="" />

        <h2 className="mt-4 text-3xl font-bold text-white">Digital campaigns</h2>

        <p className="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
          possimus adipisci distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>
      
     
    </div>
  </div>
</section>
    </>
  )
}

export default Solution