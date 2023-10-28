import './App.css';
import {useState} from 'react'

const App = ()=>{

const[inputValue,setInputValue] = useState('')
const[todoData,setTodoData] = useState([])

let addTodoHandler = ()=>{
  if(inputValue){
    // console.log(inputValue);
    setTodoData(prev=>[...prev,inputValue])
setInputValue('')
  }
}

let editTodoHandler =(index)=>{
// console.log(index);
let updateValue = prompt("enter new todo")
todoData[index] = updateValue
setTodoData([...todoData])
}

let deleteTodoHandler = (index)=>{
// console.log(index);
const delData = todoData.filter((e,i)=>i!==index)
setTodoData([...delData])
}

let deleteAllTodoHandler = ()=>{
  setTodoData([])
}

const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj67uGFQdu6IXju0CxCca1FvPgLi3I0CCKzWtBIMYKUVuBf4PZwj6Ft5aBbVaznTm1iic&usqp=CAU'


return(
<div className='container'>
  <div className='todo-App'>
  <h1>To-Do List<img src={image} alt='notebook'/></h1>
  <div className='row'>
    <input placeholder="Enter something" value={inputValue} onChange={((e)=>setInputValue(e.target.value))}/>
  <button onClick={addTodoHandler} className='btnAdd'>Add</button>
    </div> 
  <ul className='ul'>
    {
      todoData.length?todoData.map((e,i)=><li key={i}>{e} <button onClick={()=>editTodoHandler(i)} className='btnEdit'>Edit</button> <button onClick={()=>deleteTodoHandler(i)} className='btnDel'>Delete</button></li>):"No Todos"
    }    
  </ul>
    <button onClick={deleteAllTodoHandler} className='btnDelAll'>DeleteAll</button>
  </div>
</div>
)
}

export default App;
