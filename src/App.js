import './App.css';
import shopping from './shopping.jpeg';
import man from './man.jpeg'
import { GroceryList } from './groceryList';


function App() {
  return (
    <div className='App'>
      <div className='container'>
      <img src={shopping} alt="shoppingList" width="200px" className='image-top'/>
      </div>
      <h1 className='container'> Grocery List</h1>
      <GroceryList/>
      <div className='container'>
      <img src={man} alt="shoppingMan" width="200px" className='image' />
    </div>
    </div>
  );
}

export default App;
