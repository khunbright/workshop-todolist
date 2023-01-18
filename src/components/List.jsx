import '../App.css'
import { BiEditAlt,BiTaskX  } from 'react-icons/bi';

const List = ({id,title,removeItem,editItem}) => {
  return (
    <div className="list-item">
        <p>{title}</p>
        <div>
            <BiEditAlt onClick={()=>editItem(id)} className="btn"/>
            <BiTaskX onClick={()=>removeItem(id)} className="btn"/>
        </div>
    </div>
  )
}

export default List