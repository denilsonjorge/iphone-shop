import { useEffect, useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { getItem, setItem } from "../services/LocalStore";
import { ImSpinner8 } from "react-icons/im";

function Store() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(getItem("carrinhoYt") || []);
  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
      const response = await fetch(url);
      const objectjson = await response.json();
      setData(objectjson.results);
      document.getElementById("spin").classList.add("hidden")
    };
    fetchApi();
  }, []);
  const hamdleClick = (obj) => {
    const element = cart.find((e) => e.id === obj.id);
    if (element) {
      const arrFilter = cart.filter((e) => e.id !== obj.id);
      setCart(arrFilter);
      setItem("carrinhoYt", arrFilter);
    } else {
      setCart([...cart, obj]);
      setItem("carrinhoYt", [...cart, obj]);
    }
  };
  return (
    <div>
      
      <div className="mt-10 p-5 flex gap-5 flex-wrap items-center justify-center">
        <div id="spin" className="text-4xl animate-spin"><ImSpinner8 /></div>
        {data.map((e) => (
          <div key={e.id} className="p-3 flex justify-between flex-col items-center h-[320px] w-[250px] border-[1px] border-solid border-zinc-500">
            <h4 className="">{e.title}</h4>
            <img src={e.thumbnail} alt="" />
            <h4 className="">{e.price} kz</h4>
            <button className="text-[crimson] border-none bg-transparent text-lg" onClick={() => hamdleClick(e)}>
              {cart.some((itemCart) => itemCart.id === e.id) ? (
                <BsCartCheckFill />
              ) : (
                <FaCartPlus />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
