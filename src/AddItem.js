import React, { useState } from 'react';

const AddItem = ({onAddItem,items}) => {

const [itemName, setItemName]=useState('');
const [itemPrice, setItemPrice]=useState('');
const [itemQuantity, setItemQuantity]=useState('');


const [successMessage, setSuccessMessage]=useState('');




const handleButtonClick=()=>{
    if (itemName&&itemPrice&&itemQuantity){
    let itemExists=false
    if (items&&items.length!==0){
    for (let i=0;i<items.length;i++){
        if (items[i].name===itemName){
            itemExists=true;
            setSuccessMessage(itemName+" Already Exists");
            break;
        }
    }
}
    if (!itemExists){
    setSuccessMessage(itemName+" Added Successfully");
    const newItem={
        name:itemName,
        price:parseFloat(itemPrice),
        quantity:parseFloat(itemQuantity),
        total:parseFloat(itemPrice)*parseFloat(itemQuantity),
    }
    onAddItem(newItem);

    setItemName('');
    setItemPrice('');
    setItemQuantity('');

   
    
    }
    else{
        setSuccessMessage("Item Failed to Add");
    }
}
}


const handleSubmit = (e) => {
    e.preventDefault();
    handleButtonClick(); 
  };

const handlePriceChange=(e)=>{
    const value = e.target.value.replace(/[eE-]/g, '');
    if (!isNaN(value) && parseFloat(value) >= 0) {
        setItemPrice(value);
      }

}
const handleQuantityChange=(e)=>{
    const value = e.target.value.replace(/[eE-]/g, '');
    if (!isNaN(value) && parseFloat(value) >= 0) {
        setItemQuantity(value);
      }
}

    return ( 
        <div className="addItem">
        <h1>Add Item to the List</h1>
        <div className="addItemContainer">
            <form className="addItemForm" onSubmit={handleSubmit}>
                <label className="inputName">
                Enter Name of Item: 
                <input type="text" required  
                value={itemName}
                onChange={(e) => setItemName(e.target.value)} />
                </label>

                <label className="inputPrice">
                Enter Price Per Each Item: 
                <input type="number" required  
                value={itemPrice} 
                onChange={handlePriceChange}/>
                </label>

                <label className="inputQuantity">
                Enter Quantity to Add: 
                <input type="number" required 
                value={itemQuantity} 
                onChange={handleQuantityChange}
                />
                </label>

                <button className="submitButton">Submit</button>

                <p>{successMessage}</p>
                


               


            </form>
        </div>
        </div>
     );
}
 
export default AddItem;