
  import './TodoItem.css';
  import { FaCheck } from "react-icons/fa";
  import { TbXboxX } from "react-icons/tb";

function TodoItem({ onComplete, text, onDelete }) {
  return (
    <li>
      
      <span onClick={onComplete} className="icon-complete"><FaCheck /></span>
      <p className="task-text">{text}</p>
      
      <span onClick={onDelete} className="icon-delete"><TbXboxX /></span>
    </li>
  );
}

export { TodoItem };
