
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import ListBody from './ListBody';
import AddItem from './AddItem';
import { useState } from 'react';
import Checkout from './Checkout';






function App() {


  const [items,setItems]=useState([]);

  const [viewItems,setViewItems]=useState([]);

  const [viewTotal,setTotal]=useState(0);



const addItem=(newItem)=>{
  setItems([...items,newItem]);
}
const setViewItem=(newViewItems)=>{
  setViewItems([...viewItems,newViewItems]);
}
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Switch>
        <Route exact path="/">
             
        <ListBody items={items} setItems={setItems} viewItems={viewItems} setViewItems={setViewItems}
        viewTotal={viewTotal} setTotal={setTotal}/>
        
        </Route>
        <Route path="/add">
          <AddItem onAddItem={addItem}/>
        </Route>
        <Route path="/checkout">
          <Checkout viewItems={viewItems} setViewItems={setViewItem} viewTotal={viewTotal}
          setTotal={setTotal}/>
        </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
