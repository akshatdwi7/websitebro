function Fruits(){

  const fruits= [ { id: 1, name:"apple", cals: 95} ,
     { id:2 , name:"banana" , cals: 105} ,
      {  id:3 , name:"cherry" , cals: 50} ,
     { id:4,  name: "date" , cals:  66} ,
      {  id:5, name:"elderberry" , cals:  32} ,
     ];
  //fruits.sort ((a,b)=> a.cals - b.cals);// Numeric order 

  // IN order to sort using cals we use 

  const lowCalFruits = fruits.filter(fruit => fruit.cals <100); // we use filter to filter out the low cals frits 
  const listItems =lowCalFruits.map(lowCalFruits => <li key ={lowCalFruits.id}> 
                     {lowCalFruits.name}: &nbsp;
                   <b>  {lowCalFruits.cals}</b>
                        
                         </li>);  // we use .map to itreate over each item in the array

  return(
<ol>{listItems}</ol>
    
  )
}
export default Fruits;