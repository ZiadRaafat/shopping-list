
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import ListBody from './ListBody';
import AddItem from './AddItem';
import { useState } from 'react';
import Checkout from './Checkout';






function App() {


  const [items,setItems]=useState([]);

const addItem=(newItem)=>{
  setItems([...items,newItem]);
}
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Switch>
        <Route exact path="/">
             
        <ListBody items={items} setItems={setItems}/>
        
        </Route>
        <Route path="/add">
          <AddItem onAddItem={addItem}/>
        </Route>
        <Route path="/checkout">
          <Checkout/>
        </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
