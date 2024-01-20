const ListBody = ({items,setItems,viewItems,setViewItems}) => {

  const countUp=(index)=>{
    items[index].quantity+=1;
    items[index].total=items[index].quantity*items[index].price;
    setItems([...items]);
   
  }

  const countDown=(index)=>{
    if (items[index].quantity>1){
    items[index].quantity-=1;
    items[index].total=items[index].quantity*items[index].price;
    setItems([...items]);
  
    }
  }

  const deleteItem=(index)=>{
    setItems(items.filter((item,i)=>i!==index));

  }

    return ( 
        <div className="ListBodyContainer">
      
        {items.map((item, index) => (
          <div key={index} className="listItem">
            <button className="listButton2" onClick={()=>deleteItem(index)}>X</button>
            {item.name}: x{item.quantity}<br></br><br></br> Total: ${item.total}<br></br>
            <div className="buttonContainer">
            <button className="listButton" onClick={()=>countUp(index)}>+</button> <button className="listButton" onClick={()=>countDown(index)}>-</button>
            <button className="listButton" onClick={()=>setViewItems(items)}>Add to Cart</button>
          </div>
          </div>
        ))}
      
        </div>
     );
}
 
export default ListBody;