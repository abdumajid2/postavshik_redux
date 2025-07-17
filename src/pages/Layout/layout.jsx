import React from 'react'
import { Link, Outlet } from 'react-router'
import { Select } from 'antd';
import { FaTh } from "react-icons/fa";

const Layout = () => {
    const handleChange = (value) => {
      console.log(`selected ${value}`);
    };
  return (
    <div>
        <section className='max-w-5/6 m-auto p-5'>
            <header>
                <nav className='flex items-center bg-white shadow-lg p-4 justify-between'>
                    <article className='flex items-center gap-6'>
                        <div className='flex items-center gap-2'>
                    <img src="/images/logosh.svg" alt="" />
                    <h2 className='text-3xl font-bold'>Поставьщик</h2>
                        </div>
                        <div className='border-l-3 border-gray-300 h-5'>

                        </div>
                        <p>От завода без посредников</p>
                    </article>
                    <article className='flex items-center gap-[5rem]'>
                        <Select
      defaultValue="Поставьщик"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: '/', label: <Link to={'/'}> Поставьщик </Link>  },
        { value: '/category', label: <Link to={'/category'}>Категории </Link> },
        { value: '/politica', label: <Link to={'/politica'}> Политика конфиденциальности </Link> },
        { value: '/dostavka', label: <Link to={'/dostavka'}>Доставка </Link> },
        { value: '/uslug', label: <Link to={'/uslug'}>Стоимость услуг </Link> },
        { value: '/contact', label: <Link to={'/contact'}>Контакты </Link> },
        { value: '/oplata', label: <Link to={'/oplata'}>Оплата </Link> },
        { value: '/card', label: <Link to={'/Card'}>Корзина </Link> },
      ]}
    />
                    <div className='flex items-center gap-2 text-xl font-bold'>
                      <i className='fa-solid text-[#0A61DE] fa-phone'></i>
                      <p>8-800-550-01-09</p>
                    </div>
                    <i className="fa-brands text-[#0A61DE] text-2xl fa-opencart"></i>
                    </article>
                </nav>
                <section className='flex items-center bg-gray-300 p-2 justify-between'>
                  <button className='flex items-center gap-4 text-xl bg-blue-500 px-7 py-2 text-white'>
                    <FaTh /> Каталог
                  </button>
                  <div className='flex items-center w-[600px] pl-2 justify-between border border-gray-400 rounded-md '>
                    <input type="text" className='outline-hidden w-full' placeholder='Поиск'/>
                    <i class="fa-solid bg-blue-500 text-white p-3 rounded-md fa-magnifying-glass"></i>
                  </div>
                  <div className='flex items-center gap-2'>
                    <i class="fa-solid text-blue-600 fa-location-dot"></i>
                    <p>Иркутск</p>
                    <i class="fa-solid fa-angle-down"></i>
                  </div>
                </section>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer className='bg-[#1E2126] flex justify-center p-10 items-center text-white'>
               <section className='flex justify-between gap-[3rem] '>
                <article className='flex flex-col gap-6 p-5'>
                  <div className='flex items-center gap-2'>
                    <img src="/images/logosh.svg" alt="" />
                    <h2 className='text-3xl font-bold'>Поставьщик</h2>
                        </div>
                        <p>8-800-550-01-09</p>
                        <span className='text-gray-400'>postav.irk@mail.ru</span>
                        <div className='flex items-center gap-3 text-2xl text-blue-500'>
                          <i className='fa-brands fa-telegram'></i>
                          <i className='fa-brands fa-whatsapp'></i>
                          <i className='fa-brands fa-vk'></i>
                          <i className='fa-brands fa-instagram'></i>
                        </div>
                        <span className='text-gray-400'>© 2023 все права защищены</span>
                </article>
                <div className='border-[1.5px] border-gray-500'></div>
                <article className='flex flex-col gap-[3rem] p-5'>
                  <h2>
                    Информация
                  </h2>
                  <div className='flex flex-col gap-5'>
                    <p>Оплата</p>
                    <p>Доставка</p>
                    <p>Политика обработки персональных данных</p>
                    <p>Согласие на обработку персональных данных</p>
                  </div>
                </article>
                <article className='flex flex-col gap-[3rem] p-5'>
                  <h2>
                    Центральный офис и склад
                  </h2>
                  <div className='flex flex-col gap-5'>
                    <div className='flex items-center gap-2'>
                     <i class="fa-solid text-blue-500 fa-location-dot"></i>
                     <p>Иркутск, ул. Ленина 123</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <i class="fa-solid text-blue-500 fa-phone"></i>
                      <p>8-800-550-01-09</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <i class="fa-solid text-blue-500 fa-clock"></i>
                      <p>Пн-Пт 8:00-18:00</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <i class="fa-solid text-blue-500 fa-building-columns"></i>
                      <p>Региональные склады</p>
                    </div>
                  </div>
                </article>
               </section>
            </footer>
        </section>
    </div>
  )
}

export default Layout