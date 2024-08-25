import {useState} from "react";

export default function TwoWayDataBinding(){
const [input, setInput] = useState("");
 const handleChange = (e) =>{
     setInput(e.target.value);
 };

 return(
     <>
     <h1>2Way Data Binding</h1>
         <input type="text" value={input} onChange={handleChange} />
         <p>value: {input}</p>
     </>
 )
}