import Image from 'next/image';
import { useState } from 'react';
import {StarIcon} from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({id, price, title, description, category, image}) {
    const [rating] =useState(
        Math.floor(Math.random() * (MAX_RATING-MIN_RATING + 1))+ MIN_RATING
    );
    const [hasPrime] = useState(Math.random()<0.5);
    return (
        <div className="relative flex flex-col bg-white m-5 z-30 p-10 transform hover:scale-105 transition duration-300 ease-in-out">
            <p className="absolute top-2 right-2 italic text-gray-400 text-sm">{category}</p>
            <Image src={image} width={200} height={200} objectFit="contain"  />
            <h4 className="my-3">{title}</h4>
            <div className="flex items-center ">
                {Array(rating).fill().map((_,i) =>(
              <StarIcon className="h-5 text-yellow-500" />  
            ))}
            </div>
            <p className="my-2 text-xs line-clamp-2">{description}</p>
            <div className="mb-5">
                <Currency 
                quantity={price}
                currency="GBP"
                />
            </div>

            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500">Free Next-day Delivery</p>
                </div>
            )}
            <button className="mt-auto btn">Add to Basket</button>

            
            
        </div>
    )
}

export default Product
