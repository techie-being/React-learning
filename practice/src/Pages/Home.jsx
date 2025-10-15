import react, { useContext } from "react";
import Usercontext from "../Context/Usercontext";
function Home() {
  const { userdata } = useContext(Usercontext);
  if (!userdata) {
    return <h3>Loading...</h3>;
  }
  return (
    <>
      <div>
        <h1>this is the home page</h1>
        <h2>Welcome! {userdata.name}</h2>
      </div>
    </>
  );
}

export default Home;
