// import React from 'react'
// //Azam
// const Category = () => {
//   return (
//     <div>Category</div>
//   )
// }

import { useDispatch, useSelector } from "react-redux"

// export default Category
import { increament, decreament, deleteUser } from "../../store/counterSlice"
import { Link } from "react-router"



export default function Category() {

  let data = useSelector((state) => state.counter.data)
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.count)



  return (<>



    <section className=" m-auto">
      <h1 className="font-black text-[40px]">Базальтовая вата</h1>

      <div className="flex flex-wrap gap-[20px]">{data.map((e) => {
        return (
          <div key={e.id} className="w-[280px] h-[487px] flex flex-col gap-[20px] items-center">
            <img src={e.img} alt="" />
            <h1 className="text-center text-[20px]">{e.name}</h1>
            <div className="flex gap-[20px] justify-between px-[20px]">
              <button className="w-[50px] h-[50px] border" onClick={() => dispatch(decreament())} >-</button>
              <Link to={`/info/${e.id}`}>
                <button className="w-[50px] h-[50px] border"><h1>{count}</h1></button>
              </Link>
              <button className="w-[50px] h-[50px] border" onClick={() => dispatch(increament())}>+</button>
              <button className="w-[50px] h-[50px] border bg-[red]" onClick={() => dispatch(deleteUser(e.id))}>🗑️</button>
            </div>


          </div>
        )
      })}</div>


      <div className="flex flex-wrap gap-[20px]">{data.map((e) => {
        return (
          <div key={e.id} className="w-[280px] h-[487px] flex flex-col gap-[20px] items-center">
            <img src={e.img} alt="" />
            <h1 className="text-center text-[20px]">{e.name}</h1>
            <div className="flex gap-[20px] justify-between px-[20px]">
              <button className="w-[50px] h-[50px] border" onClick={() => dispatch(decreament())} >-</button>
              <Link to={`/info/${e.id}`}>
                <button className="w-[50px] h-[50px] border"><h1>{count}</h1></button>
              </Link>
              <button className="w-[50px] h-[50px] border" onClick={() => dispatch(increament())}>+</button>
              <button className="w-[50px] h-[50px] border bg-[red]" onClick={() => dispatch(deleteUser(e.id))}>🗑️</button>
            </div>


          </div>
        )
      })}</div>
      <div className="flex flex-wrap gap-[20px]">{data.map((e) => {
        return (
          <div key={e.id} className="w-[280px] h-[487px] flex flex-col gap-[20px] items-center">
            <img src={e.img} alt="" />
            <h1 className="text-center text-[20px]">{e.name}</h1>
            <div className="flex gap-[20px] justify-between px-[20px]">
              <button className="w-[50px] h-[50px] border" onClick={() => dispatch(decreament())} >-</button>
              <Link to={`/info/${e.id}`}>
                <button className="w-[50px] h-[50px] border"><h1>{count}</h1></button>
              </Link>
              <button className="w-[50px] h-[50px] border" onClick={() => dispatch(increament())}>+</button>
              <button className="w-[50px] h-[50px] border bg-[red]" onClick={() => dispatch(deleteUser(e.id))}>🗑️</button>
            </div>


          </div>
        )
      })}</div>
    </section>


  </>)
}