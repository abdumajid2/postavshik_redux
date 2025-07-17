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
                    <input type="text" placeholder='Поиск'/>
                    <i class="fa-solid bg-blue-500 p-2 rounded-md fa-magnifying-glass"></i>
                  </div>
                  <div className='flex items-center gap-2'>
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Иркутск</p>
                    <i class="fa-solid fa-angle-down"></i>
                  </div>
                </section>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>

            </footer>
        </section>
    </div>
  )
}

export default Layout