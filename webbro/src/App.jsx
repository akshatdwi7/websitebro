
import Fruits from "./Fruits.jsx";

function App() {


  const fruits=   [ { id: 1, name:"apple", cals: 95} ,
                     { id:2 , name:"banana" , cals: 105} ,
                      {  id:3 , name:"cherry" , cals: 50} ,
                       { id:4,  name: "date" , cals:  66} ,
                      {  id:5, name:"elderberry" , cals:  32} ,
    ];
  return (
    <  Fruits  items={fruits}  cato="frus"  />
  );
}
export default App;
