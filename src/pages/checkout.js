import Header from "../../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-xl border-b pb-4">
              {items.length === 0
                ? "Your shopping Basket is empty"
                : "Your shopping Basket "}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct key={i} product={item} />
            ))}
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          <>
            <h2 className="whitespace-nowrap">
              Subtotal ({items.length} items) :
              <span className="font-bold">
                <Currency quantity={total} currency="GBP" />
              </span>
            </h2>
            <button
            disabled={!session}
              className={`btn mt-2 ${
                !session &&
                "from-gray-300 to-gray-500 text-gray-300 cursor-not-allowed"
              }`}
            >
              {!session ? "Sign In to checkout" : "Proceed to checkout"}
            </button>
          </>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
