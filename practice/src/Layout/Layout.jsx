import React, { useContext, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Usercontext from "../Context/Usercontext";

function Layout() {
  const loaderData = useLoaderData(); // fetched via rootLoader
  const { userdata, setuserdata } = useContext(Usercontext);

  // Save loader data into context on first load
  // useEffect(() => {
  //   if (!userdata && loaderData) {
  //     setUserdata(loaderData);
  //   }
  // }, [loaderData, userdata, setUserdata]);

  useEffect(() => {
  if (!userdata && loaderData) {
    setuserdata(loaderData);
  }
}, [loaderData, userdata, setuserdata]);


  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;
