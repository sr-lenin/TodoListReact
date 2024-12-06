import './CreateTodoButton.css';
function CreateTodoButton(){
    return(
        <button 
        className='CreateTodoButtun' 
        onClick={()=> console.log
            ("Le diste Click")}
        >+</button>
    );
}

export {CreateTodoButton}