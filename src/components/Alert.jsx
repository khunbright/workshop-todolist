import { useEffect } from "react"
const Alert = ({message,type,setAlert,list}) => {
    useEffect(() => {
      const timeout = setTimeout(()=>{
        setAlert({show:false,message:"",type:""})
      },1000)
      return()=>clearTimeout(timeout)
      // eslint-disable-next-line
    },[list])
   
  return (
    <p className={`alert ${type}`}>
        {message}
    </p>
  )
}

export default Alert