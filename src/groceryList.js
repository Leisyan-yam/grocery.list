import { Component } from "react";
import icon from './icon.png'

export class GroceryList extends Component{
    state = {
        userInput: "",
        groceryList: []
    }

        onChangeEvent(e) {
            this.setState({userInput: e});
        }
        
        addItem(input){
            if(input===""){
                return alert('Please enter product name')
            }
             
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({GroceryList: listArray, userInput: ""})
        }
        deleteItem(){
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray});
        }

        crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed')
        }

        onFormSubmit(e) {
            e.preventDefault();
        }

    render() {
return(
    <div>
        <form onSubmit={this.onFormSubmit}>
    <div className="container">
       <input className="input" type="text" 
       placeholder="What are you gonna buy?" 
       onChange={(e) => {this.onChangeEvent(e.target.value)}}
       value={this.state.userInput}/> 
    </div>
            <div className='container'>
                <button className="btn add" onClick={() => this.addItem(this.state.userInput)}> ADD</button>
            </div>
        <div>
            <ul>
                {this.state.groceryList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}> <img src={icon} alt="iconofitem" width="20px"/> {item} </li>
                ))}
            </ul>
        </div>
        <div className='container'>
            <button className="btn delete" onClick={ () => this.deleteItem()}> DELETE</button>
        </div>
        </form>
        </div>
        
        )
    }
}