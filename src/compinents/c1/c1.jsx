import React from "react"

const C1 = () => {
  return (
    <div>
      <div className='w-full  bg-gray-100 flex items-center '>
        <button className='flex items-center bg-blue-500 text-white px-6 h-12 rounded-none text-sm font-medium mr-2' style={{ minWidth: 140 }}>
          <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
          КАТАЛОГ
        </button>
        <div className='flex-1 flex items-center'>
          <input type='text' placeholder='Поиск' className='w-full h-12 px-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white' style={{ minWidth: 0 }} />
          <button className='bg-blue-500 h-12 w-12 flex items-center justify-center text-white rounded-none'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <circle cx='11' cy='11' r='8' />
              <line x1='21' y1='21' x2='16.65' y2='16.65' />
            </svg>
          </button>
        </div>
        <div className='flex items-center ml-4'>
          <svg className='w-5 h-5 text-blue-500 mr-1' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z' />
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z' />
          </svg>
          <span className='text-sm text-gray-700'>Иркутск</span>
          <svg className='w-4 h-4 text-gray-400 ml-1' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default C1
