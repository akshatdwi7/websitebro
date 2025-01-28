function Fruits(){

  const fruits= [ { name:"apple", cals: 95} ,
     { name:"banana" , cals: 105} ,
      { name:"cherry", cals: 50} ,
     { name: "date" , cals:  66} ,
      { name:"elderberry" , cals:  32} ,
     ];
  fruits.sort();
  const listItems =fruits.map(fruit => <li key ={fruit.name}> 
                     {fruit.name}: &nbsp;
                     {fruit.cals}
                        
                         </li>);

  return(
<ol>{listItems}</ol>
    
  )
}
export default Fruits;