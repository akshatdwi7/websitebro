function Fruits(props) {


   const itemList = props.itmes;


  const listItems = itemList.map((item) => (
    <li key={lowCalFruits.id}>
      {lowCalFruits.name}: &nbsp;
      <b> {lowCalFruits.cals}</b>
    </li>
  ));
  return <ol>{listItems}</ol>;
}
export default Fruits;

//fruits.sort ((a,b)=> a.cals - b.cals);// Numeric order
// we use .map to itreate over each item in the array

// IN order to sort using cals we use
//const lowCalFruits = fruits.filter(fruit => fruit.cals <100); // we use filter to filter out the low cals frits
