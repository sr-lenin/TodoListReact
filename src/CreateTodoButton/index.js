import './CreateTodoButton.css';
function CreateTodoButton(){
    return(
        <button 
        className='CreateTodoButtun' 
        onClick={
            (event)=> {
            console.log("Le diste Click")
            console.log(event)
            console.log(event.target)
        }
    }
        >+</button>
    );
}

export {CreateTodoButton}