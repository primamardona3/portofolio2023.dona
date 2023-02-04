import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
                Nama saya perima mardona saya umur 26 tahun saat ini saya tinggal di jakarta. saya lulusan universitas bengkulu.
                saat ini saya bekerja sebagai application support di sebuah perusahaan asuransi.
            </p>
            <br />

            <p className='text-xl'>
                untuk pengalaman kerja saya pernah bekerja di suatu perusahaan swasta.
            </p>
        </div>


    </div>
  )
}

export default About;