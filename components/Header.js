import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import {signIn, signOut, useSession} from 'next-auth/client';
import {useRouter} from 'next/router'
import { useSelector } from "react-redux";
import { selectItems } from "../src/slices/basketSlice";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  
  return (
    <header className="sticky top-0 z-50">
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 py-2 flex-grow">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            height={40}
            width={150}
            objectFit="contain"
            className="cursor-pointer"
            onClick = {() => router.push("/")}
          />
        </div>
        {/* search  */}
        <div className="bg-yellow-400 hover:bg-yellow-500 hidden sm:flex h-10 items-center rounded-md flex-grow cursor-pointer">
          <input className="h-full p-2 px-4 flex-grow rounded-l-md outline-none" type="text" />
          <SearchIcon className="h-12 p-4 " />
        </div>

        {/* right section  */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
            <div onClick={!session ? signIn : signOut} className="link">
              <p> {session ? `Hello, ${session.user.name}` : 'Sign In'}</p> 
              <p className="font-extrabold md:text-sm">Account & Lists</p> 

            </div>
            <div className="link">
                <p>Returns</p>
                <p className="font-extrabold md:text-sm">& Orders</p>

            </div>
            <div onClick={() => router.push("/checkout")} className="link relative flex  items-center">
                <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold">{items.length}</span>
             <ShoppingCartIcon className="h-10" />
             <p className=" hidden md:inline mt-2 font-extrabold md:text-sm">Basket</p>
            </div>
            
        </div>
      </div>

      {/* Borttom nav  */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
           All
        </p>
        <p className="link">Prime Videos</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal care</p>
        
        
      </div>
    </header>
  );
}

export default Header;
