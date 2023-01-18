import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import List from './components/List';
import Alert from './components/Alert';

function App() {
  const [name, setName] = useState("")
  const [list,setList] = useState([])

  const [alert,setAlert] = useState({show:false,message:"",type:""})

  const [checkeditItem,setCheckeditItem] = useState(false)

  const [editid,setEditid] = useState(null)

  const  submitData=(e)=>{
    e.preventDefault()
    if(!name){
      setAlert({show:true,message:"Please input information",type:"error"})
    }else if(checkeditItem && name){
      const result=list.map((item)=>{
        if(item.id === editid){
          return{...item,title:name}
        }
        return item
      })
      setList(result)
      setName("")
      setCheckeditItem(false)
      setEditid(null)
      setAlert({show:true,message:"Edit Done",type:"success"})
    }else{
      const newItem = {
        id:uuidv4(),
        title:name
      }
      setList([...list,newItem])
      setName("")
      setAlert({show:true,message:"Saved",type:"success"})
    }
  }

    const removeItem=(id)=>{
    const result =  list.filter((item)=>item.id !== id)
    setList(result)
    setAlert({show:true,message:"Delete Done",type:"error"})
    }

  const editItem=(id)=>{
    setCheckeditItem(true)
    setEditid(id)
    const searchItem=list.find((item)=>item.id === id)
    setName(searchItem.title)
  }
  return (
    <section className="container">
      <h1>Todolist APP</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} list={list}/>}
      <form className="form-group" onSubmit={submitData}>
        <div className='form-control'>
          <input type="text" className="text-input" 
          onChange={(e)=>setName(e.target.value)}
          value={name}
          />
          <button type='summit' className='submit-btn'>
            {checkeditItem? "Edit DATA":"ADD"}
          </button>
        </div>
      </form>
      <section className='list-container'>
        {list.map((data,index)=>{
          return <List key={index} {...data} removeItem={removeItem} editItem={editItem}/>
        })}
      </section>
    </section>
  );
}

export default App;
