import React from 'react'

const contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      
    <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Silahkan Hubungi saya jika ada yang anda ingin tanyakan</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/1d2ddd5c-9f03-43c3-aebc-edda6908dc81" method="POST" className='flex flex-col w-full md:w-1/2'>
                <input 
                type="text" 
                name='email' 
                placeholder='enter your email'
                className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <input 
                type="text" 
                name='name' 
                placeholder='enter your name'
                className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                <textarea name="message" placeholder='enter your message' rows="10" className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Ayo Diskusi</button>
            </form>
        </div>
    </div>


    </div>
  )
}

export default contact
