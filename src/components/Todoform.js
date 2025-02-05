import React,{useState, useEffect,useRef} from 'react';

function Todoform(props) {
const[input, setInput]=useState(props.edit ? props.edit.value:'');

const inputRef = useRef(null)

useEffect(() => {
    inputRef.current.focus()
})


const handleChange=e=>{
    setInput(e.target.value);
};

const handleSubmit=e=>{
    e.preventDefault();
    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });
    setInput('');
};
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit ? (
            <>
            <input type="text" placeholder='Update your item' value={input} name='text' className='todo-input edit' onChange={handleChange} ref={inputRef}/>)
        <button onClick={handleSubmit} className='todo-button edit'>Update</button></>) :
        (<><input type="text" placeholder='Add a To-Do task' value={input} name='text' className='todo-input' onChange={handleChange} ref={inputRef}/>)
        <button onClick={handleSubmit} className='todo-button'>Add To-Do task</button></>) 
        
    }

        
        
    </form>
  );
}

export default Todoform;
