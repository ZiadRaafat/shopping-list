import { useEffect,useState } from 'react';

const ListBody = ({items,setItems,viewItems,setViewItems,viewTotal,setTotal}) => {

const [successMessage, setSuccessMessage]=useState('');


  const updateTotal=()=>{
    let total=0;
    for (let i=0;i<viewItems.length;i++){
      total+=viewItems[i].total;
    }
    setTotal(total);
  }

  useEffect(() => {
    updateTotal(); 
  }, [viewItems]);
  

  const countUp=(index)=>{
    items[index].quantity+=1;
    items[index].total=items[index].quantity*items[index].price;
    setItems([...items]);
    updateTotal();

    
   
  }

  const countDown=(index)=>{
    if (items[index].quantity>1){
    items[index].quantity-=1;
    items[index].total=items[index].quantity*items[index].price;
    setItems([...items]);
    updateTotal();
  
    
    }
  }

  const deleteItem=(index)=>{
    setItems(items.filter((item,i)=>i!==index));

  }

  
 const handleCheckout=(item)=>{
  setViewItems([...viewItems,item]);
  updateTotal();
  setSuccessMessage(item.name+" Added Successfully ");
 }

 useEffect(() => {
  const timeoutId = setTimeout(() => {
    setSuccessMessage('');
  }, 3000);

  return () => clearTimeout(timeoutId);
}, [successMessage]); 

    return ( 
      <div>
        <div className="ListBodyContainer">
      
        {items.map((item, index) => (
          <div key={index} className="listItem">
            <button className="listButton2" onClick={()=>deleteItem(index)}>X</button>
            {item.name}: x{item.quantity}<br></br><br></br> Total: ${item.total}<br></br>
            <div className="buttonContainer">
            <button className="listButton" onClick={()=>countUp(index)}>+</button> <button className="listButton" onClick={()=>countDown(index)}>-</button>
            <button className="listButton" onClick={()=>handleCheckout(item)}>Add to Cart</button>
          </div>
          </div>
        ))}
        </div>
        <p className='successMessage'>{successMessage}</p>
        </div>
     );
}
 
export default ListBody;