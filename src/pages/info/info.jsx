// import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import img1 from '../../assets/Group 119.png';
import img2 from '../../assets/Group 120.png';
import img3 from '../../assets/Group 121.png';
import { increament, decreament, deleteUser } from "../../store/counterSlice";
import { Link, useParams } from "react-router";

export default function Info() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);
    const { id } = useParams();

      const users = [
        { name: "Пеноплекс 1", price: "2 491", id: "1", img: img1 },
        { name: "Пеноплекс 2", price: "2 491", id: "2", img: img2 },
        { name: "Пеноплекс 3", price: "2 491", id: "3", img: img3 },
        { name: "Пеноплекс 4", price: "2 491", id: "4", img: img1 },
        { name: "Пеноплекс 5", price: "2 491", id: "5", img: img2 },
        { name: "Пеноплекс 6", price: "2 491", id: "6", img: img3 },
        { name: "Пеноплекс 7", price: "2 491", id: "7", img: img1 },
        { name: "Пеноплекс 8", price: "2 491", id: "8", img: img2 }
      ];


    let data = [
        { name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3", price: "2 491", id: "1", img: './AzamImg1.png' },
        { name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3", price: "2 491", id: "2", img: './AzamImg2.png' },
        { name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3", price: "2 491", id: "3", img: './AzamImg3.png' },
        { name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3", price: "2 491", id: "4", img: './AzamImg4.png' },
        { name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3", price: "2 491", id: "5", img: './AzamImg5.png' },
        { name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3", price: "2 491", id: "6", img: './AzamImg6.png' },
        { name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3", price: "2 491", id: "7", img: './AzamImg7.png' },
        { name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3", price: "2 491", id: "8", img: './AzamImg8.png' }

    ]

    const product = data.find((e) => e.id === id);

  
    return (
        <>
            <section className="p-4">
                <h1 className="font-bold text-3xl mb-4">{product.name}</h1>
                <div className="flex flex-wrap gap-8">
                    <div className="flex flex-col gap-2">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>

                    <img src={product.img} alt="Product" className="w-[300px] h-auto" />

                    <div className="w-[200px] text-center flex flex-col items-center gap-4">
                        <h2 className="text-center">Цена за штуку</h2>
                        <h1 className="font-bold text-sky-600 text-4xl">{product.price}$</h1>
                        <div className="flex justify-between w-full">
                            <button className="w-12 h-12 border" onClick={() => dispatch(decreament())}>-</button>
                            <div className="w-12 h-12 border flex items-center justify-center">{count}</div>
                            <button className="w-12 h-12 border" onClick={() => dispatch(increament())}>+</button>
                        </div>
                        <button className="w-full h-12 bg-blue-600 text-white text-lg">В корзину</button>
                    </div>
                </div>
            </section>

            <section className="p-4">
                <h1 className="text-2xl font-semibold mb-2">Описание</h1>
                <p className="mb-4">
                    Минеральный утеплитель ТеплоKNAUF Стена Extra разработан специально для теплоизоляции наружных каркасных стен.Изготовлен из натуральных природных компонентов, в его составе не содержится фенол-формальдегидных и акриловых смол, это безопасный материал. Он не колется и не вызывает зуда при монтаже, мало пылит и мягкий на ощупь, без неприятных запахов. В том числе поэтому утеплитель ТеплоKNAUF Стена Extra рекомендуется применять для детских комнат или спален.
                </p>
                <h2 className="font-bold">Особенности:</h2>
                <ul className="list-disc ml-5 mb-4">
                    <li>Простота и удобство в работе: материал легко режется, отлично монтируется враспор между стойками каркаса.</li>
                    <li>Материал благодаря своей упругости и прочности держится в конструкции, не спадая и не оседая</li>
                    <li>Формат – плита, толщина материала – 50 мм. Размер плиты удобен для монтажа силами одного человека</li>
                    <li>Долговечность: срок службы не менее 50 лет.</li>
                    <li>Компактно упакован: материал сжат в упаковке для более экономичной транспортировки и хранения. Подобная пачка содержит на 11% больше изоляции, чем обычная упаковка несжатой изоляции.</li>
                    <li>Защищен от влаги за счет гидрофобизирующей технологии Aquastatik</li>
                    <li>Не горит и не выделяет резкого удушливого дыма</li>
                    <li>Произведен в России</li>
                </ul>

                <h2 className="font-bold">Рекомендации по установке:</h2>
                <ul className="list-disc ml-5">
                    <li>Режется и монтируется легко</li>
                    <li>Долговечность и прочность</li>
                    <li>Удобный формат плит</li>
                </ul>
            </section>


            <section className="flex overflow-x-scroll gap-[30px] mt-[100px]">{users.map((e) => {
                return (
                    <div className="w-[300px] h-[438px] shrink-0 text-center border flex flex-col items-center" key={e.id}>
                        <img className="w-[280px]" src={e.img} alt="" />
                        <h1 className="px-[10px] text-[20px]">{e.name}</h1>
                        <h1 className="font-bold text-[30px]  text-sky-600">{e.price}$</h1>
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
            })}</section>
            <section className="flex overflow-x-scroll gap-[30px] mt-[100px]">{users.map((e) => {
                return (
                    <div className="w-[300px] h-[438px] shrink-0 text-center border flex flex-col items-center" key={e.id}>
                        <img className="w-[280px]" src={e.img} alt="" />
                        <h1 className="px-[10px] text-[20px]">{e.name}</h1>
                        <h1 className="font-bold text-[30px]  text-sky-600">{e.price}$</h1>
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
            })}</section>


        </>
    );
}
