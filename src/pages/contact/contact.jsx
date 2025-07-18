import React from "react"
import Get from "../../getComponent/get"

import CoC1 from "./kontactiC/kontactiC1"

const Contact = () => {
  return (
    <>
      

      <div className='bg-white pt-20 pl-15 text-[50px] mt-6'>
        <h1>Контакты</h1>
      </div>

      <div>
        <KontactiC1 />
        <KontactiC1 />
        <KontactiC1 />
        <KontactiC1 />
      </div>

      <div>
        <Get />
      </div>

      
    </>
  )
}

export default Contact
