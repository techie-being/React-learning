import React from 'react'
function Card(props) {   //props is a object in react that is used to reuse card multiple times we can pass array ,object, to this props
  //here we just pass props object and then we give reference using props.username or something else , we can also pass directly username and other properties as well and we can set a default value as well if someone forgets to pass a value in card.jsx, so it reduce difficulty of everytime using props.propertyname.
  console.log("props",props.username)
  
    return(
        <div className="w-80 h-80 rounded-xl mb-4">
        <img
          src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
          alt="Giphy"
          className="rounded-t-xl"
        />
        <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
        {/* <h1 className="font-mono  text-xl">Available soon</h1> */}
        <h1 className="font-mono  text-xl">{props.username}</h1>   
        </div>
      </div>

    )
}
export default Card

//we can give refrecnce her according to this format or directly property name if we pass in card function we had pass directly property name.
        