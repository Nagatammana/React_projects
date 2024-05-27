import Body from "./Body";
const App=()=>{
  return(
    <div>
    <div className="Header">
      <div>
        <img className="logo" src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"/>
      </div>
      <div>
        <h2>Amma,s Kitchen</h2>
      </div>
      <div className="Nav_items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>login</li>
        </ul>
      </div>
    </div>
    <Body/>
    </div>
  

  )
}
export default App;