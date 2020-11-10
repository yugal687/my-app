import { render } from "@testing-library/react"
import React, {Component} from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"


// function App() {
//     return(
//         <div>
//             <img onMouseOver= {() => console.log("hovered")} src="https://www.fillmurray.com/200/100"/>
//             </div>
//     )
// }

// class App extends React.Component {

//     constructor() {
//         super()
//         this.state = {
//             todos: todosData
//         }
//     }

//     render() {
//         const todoItems = this.state.todos.map(item =>  <TodoItem key={item.id} item={item}/>)
//         return(
//             <div className="todo-list"> 
//                 {todoItems}
//             </div>
//         )
//     }
// }

// class App extends React.Component {
//     render(){
//         const todoItems = todosData.map(item =>  <TodoItem key={item.id} item={item}/>)
//         return(
//                 <div>
//                  {todoItems}
//                 </div>
//         )
//     }
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             answer: "yes"
//         }
//     }
//     render() {
//         return(
//             <div>
//                 <h1>Is the state important? {this.state.answer}</h1>
//             </div>
//         )
//     }
// }

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             fruit: "mango",
//             price: 18
//         }
//     }
//     render() {
//         return(
//             <div>
//                 <h1>{this.state.fruit}</h1>
//                 <h2>${this.state.price}</h2>
//             </div>
//         )
//     }
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             isLoggedIn: true
//         }
//     }
//     render() {
//         let wordDisplay
//         if (this.state.isLoggedIn === true){
//             wordDisplay = "in"
//         }
//         else {
//             wordDisplay = "out"
//         }
//         return(
//             <div>
//                 <h1>You are currently Logged {wordDisplay}</h1>
//             </div>
//         )
//     }
// }

// class App extends React.Component {

//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick() {
//         this.setState({count: 1})
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.handleClick}>Change!</button>
//             </div>
//         )
//     }
// }

// class App extends React.Component {

//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//         this.handleClick = this.handleClick.bind(this)
//         this.handelClick = this.handelClick.bind(this)
//     }

//     handleClick() {
//         this.setState(prevState => {
//             return{
//                 count: prevState.count + 1
//             }
//         })
//     }
//     handelClick() {
//         this.setState(nextState => {
//             return {
//                 count: nextState.count - 1
//             }
//         })
//     }
//     render() {
//         return(
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.handleClick}>Increase!</button>
//                 <button onClick={this.handelClick}>decrease!</button>
//             </div>
//         )
//     }
// }


//to increase and descrease number
// class App extends React.Component {
    
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//         this.handleAddClick = this.handleAddClick.bind(this)
//         this.handleSubClick = this.handleSubClick.bind(this) //this is used because we are using setState i.e if setState used we need to bind.
//     }

//     handleAddClick() {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count + 1
//             }
//         })
//     }

//     handleSubClick() {
//         this.setState(nextState => {
//             return{
//                 count: nextState.count - 1
//             }
//         })
//     }

//     render() {
//         return(
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.handleAddClick}>Increase!</button>
//                 <button onClick={this.handleSubClick}>Decrease!</button>
//             </div>
//         )
//     }
// }


class App extends Component {
    constructor(){
        super()

        this.onClickForward = this.onClickForward.bind(this)
        this.onClickBack = this.onClickBack.bind(this)

        const img01 = require('./images/img1.jpg');
        const img02 = require('./images/img2.jpg');
        const img03 = require('./images/img3.jpg');

        this.state = {
            index: 0,
            imgList: [img01, img02, img03]
        }

    }
    onClickForward() {
        if (this.state.index + 1 === this.state.imgList.length) {
            this.setState({
                index: 0
            })
        } else {
                this.setState({
                    index: this.state.index + 1
                })
            }
    }
    onClickBack() {
        if (this.state.index - 1 === - 1) {
                this.setState({
                    index: this.state.imgList.length - 1
                })
        } else {
                this.setState({
                    index: this.state.index - 1
                })
            }
     }
    render() {
        return(
            <div>
                <img src={this.state.imgList[this.state.index]} alt="" /> <br />
                <button onClick={this.onClickBack}>Back</button>
                <button onClick={this.onClickForward}>Forward</button>
            </div>
        )
    }
}

export default App

