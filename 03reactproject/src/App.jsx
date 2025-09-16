import { useState } from "react";
import reactLogo from "./assets/react.svg";
import InputBox from "./Components/InputBox";
import Usecurrencyinfo from "./Custom_hooks/Usecurrencyinfo";

function App() {
  const [amount, setamount] = useState();
  const [from, setfrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedamount, setconvertedamount] = useState(0);
  const currencyinfo = Usecurrencyinfo(from);

  const options = Object.keys(currencyinfo);
  const swap = () => {
    setfrom(to);
    setTo(from);
    setconvertedamount(amount);
    setamount(convertedamount);
  };

  const convert = () => {
    setconvertedamount(amount * currencyinfo[to]);
  };
  return (
    <>
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1625236239092-8d15fbff5420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=100')",
        
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setfrom(currency)}
                onAmountChange={(amount) => setamount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedamount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>

    </>
    
  );
}

export default App;
