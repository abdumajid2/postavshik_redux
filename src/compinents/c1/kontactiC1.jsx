import React from "react"

const KontactiC1 = () => {
  return (
    <div className='flex flex-row justify-center items-start w-full self-center bg-white pl-30 pt-10 pr-10 pb-10'>
      <div className=' mr-8'>
        <h2 className='font-bold text-lg mb-6'>Центральный офис и склад</h2>
        <ul className='space-y-4 text-base'>
          <li className='flex items-center'>
            <span className='text-blue-500 mr-3'>
              <h1>😎</h1>
            </span>
            <span>+7 (3952) 648-139</span>
          </li>
          <li className='flex items-center'>
            <span className='text-blue-500 mr-3'>
              <h1>😎</h1>
            </span>
            <span>postav.irk@mail.ru</span>
          </li>
          <li className='flex items-center'>
            <span className='text-blue-500 mr-3'>
              <h1>😎</h1>
            </span>
            <span>+7(924) 626-33-40</span>
          </li>
          <li className='flex items-center'>
            <span className='text-blue-500 mr-3'>
              <h1>😎</h1>
            </span>
            <span>г. Иркутск ул. Ракитная стр 4 корп 11</span>
          </li>
          <li className='flex items-center'>
            <span className='text-blue-500 mr-3'>
              <h1>😎</h1>
            </span>
            <span>Пн-Пт с 9:00 до 18:00, сб с 09:00 до 14:00</span>
          </li>
        </ul>
      </div>
      <div className='flex-1'>
        <img src='/img4.png' alt='Карта' className='w-[850px] h-[350px] object-cover rounded shadow' />
      </div>
    </div>
  )
}

export default KontactiC1
