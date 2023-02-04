import React from 'react'

import htmll from '../assets/htmll.png'
import csss from '../assets/csss.png'
import github from '../assets/github.png' 
import mysql from '../assets/mysql.png'
import next from '../assets/next.png'
import react from '../assets/react.png'
import tallwind from '../assets/tallwind.png'
import scss from '../assets/scss.png'
import pentaho from '../assets/pentaho.png'
import excel from '../assets/excel.png'

const Experience = () => {

    const experience = [
        {
            id:1,
            src: htmll,
            tittle: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: csss,
            tittle: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: mysql,
            tittle: 'MYSQL',
            style: 'shadow-sky-300'
        },
        {
            id:4,
            src: github,
            tittle: 'GITHUB',
            style: 'shadow-gray-400'
        },
        {
            id:5,
            src: next,
            tittle: 'NEXT',
            style: 'shadow-cyan-600'
        },
        {
            id:7,
            src: tallwind,
            tittle: 'TALLWIND',
            style: 'shadow-yellow-400'
        },
        {
            id:6,
            src: react,
            tittle: 'REACT',
            style: 'shadow-sky-400'
        },
        {
            id:8,
            src: scss,
            tittle: 'SCSS',
            style: 'shadow-pink-500'
        },
        {
            id:9,
            src: excel,
            tittle: 'EXCEl',
            style: 'shadow-green-400'
        },
        {
            id:10,
            src: pentaho,
            tittle: 'PENTAHO',
            style: 'shadow-red-600'
        },

    ]


  return (
    <div name="experiance" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>

        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experiance</p>
                <p className='py-6'>ini tools yang telah saya pelajaari dan saya pahami sejauh ini</p>
            </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {experience.map(({id, src, tittle, style}) =>(
                    <div 
                        key={id} 
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}
                        >
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{tittle}</p>
                    </div>
                    ))}
                </div>
        </div>
    </div>
  )
}

export default Experience
