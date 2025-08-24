
//imports "Chai" component from chai.jsx     .
function App() {
  // how to inject variables in jsx, so we use a concept alled evaluated expression {} inside this braces it is considred as injected
  const username = "rakesh";
  return (
    <h1>hi  my name is {username} i am a developer</h1>
  )
}


export default App  //export default app function to main .jsx  as same way as we expoerted chai component in app.jsx  .
//in jsx we can only return one element ,so if any situation ocuurs when we have to return multiple elements then we can use either div tag or "<>"" known as fragements in react.
