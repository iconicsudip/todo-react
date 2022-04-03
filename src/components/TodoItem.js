import React from "react";

export default function TodoItem({todo,onDelete}) {
    function passItem(){
        return onDelete(todo);
    }
    return (
        <>
        {/* <div>
            <h3>{todo.srno}</h3>
            <h3>{todo.title}</h3>
            <h3>{todo.desc}</h3>
            
            <button type="button" class="btn btn-danger" onClick={passItem}>Delete</button>
            
        </div> */}
        <tr>
            <th scope="row">{todo.srno}</th>
            <td>{todo.title}</td>
            <td>{todo.desc}</td>
            <td>
                <button type="submit" className="btn btn-danger" onClick={passItem}>Delete</button>
                <button type="submit" className="btn btn-success ms-1">Finished</button>
            </td>
        </tr>
        </>
        
    );
}
