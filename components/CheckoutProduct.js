import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../src/slices/basketSlice";
function CheckoutProduct({ product }) {
    const dispatch = useDispatch();
  const { id, price, title, description, category, image, rating, hasPrime } =product;
  const addItemToBasket = () =>{
    const products = {
        id,
        price,
        title,
        description,
        category,
        image,
        rating,
        hasPrime,
    };

    dispatch(addToBasket(products));
  }

  const removeItemFromBasket= ()=>{
      dispatch(removeFromBasket({id}))
  }
    
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5 my-auto">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500 " />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3 ">{description}</p>
        <Currency quantity={price} currency="GBP" />
        {hasPrime && (
          <div className="flex items-center space-x-2 ">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 justify-self-end my-auto">
        <button onClick={addItemToBasket} className="btn">Add to Basket</button>
        <button onClick={removeItemFromBasket} className="btn">Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
