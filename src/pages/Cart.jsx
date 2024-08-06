import { useState } from "react";
import { getItem, setItem } from "../services/LocalStore";
import { BsFillCartDashFill } from "react-icons/bs";

function Cart() {
  const [data,setData]=useState(getItem("carrinhoYt") || [])
  const removeItem=(obj)=>{
    const arrFilter=data.filter((e)=> e.id !== obj.id)
    setData(arrFilter)
    setItem("carrinhoYt",arrFilter)
  }
  return ( 
  <div>
    <h1 className="text-center text-4xl my-5">Cart</h1>
    <div className="flex gap-5 flex-wrap items-center justify-center">
      {
        data.map((e)=>(
          <div className="p-3 flex justify-between flex-col items-center h-[320px] w-[250px] border-[1px] border-solid border-zinc-500" key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt="" />
            <h4>{e.price}Kz</h4>
            <button className="text-[crimson] border-none bg-transparent text-lg" onClick={()=> removeItem(e)}><BsFillCartDashFill /></button>
          </div>
        ))
      }
    </div>
  </div>
   );
}

export default Cart;