import { useEffect,useState } from "react";

function Usecurrencyinfo(currency){
    //we have used usestate here to propagate changes in ui whenever we switch currency
    const [data,setdata] = useState({});

    //we used useeffect here ,so it will not have to render everytime it render only when currency is changed so currency is passed in dependency array
    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        //here (response)=> is a callback function in arrow function style and response is a parameter.
        .then((response)=>{
            return response.json();             
        })
        //here response currency return value acoording to current exchange rate of that currency to other foreign currencies.
        .then((response) => setdata(response[currency]));
        

    },[currency])
    console.log(data);
    //we use return data because hook always return something that componenet can use data holds the required information of of selected currency.
    return data;
}
export default Usecurrencyinfo;