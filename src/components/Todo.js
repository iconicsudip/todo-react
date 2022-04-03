import React from "react";
import AddItem from "./AddItem";
import EmptyTodo from "./EmptyTodo";
import TodoItem from "./TodoItem";

export default function Todo(props) {
    return (
        <>
        <section >
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7">
                    <div className="card rounded-3">
                        <div className="card-body p-4">
                        <h3 className="heading" style={{color: "red",textAlign:"center"}}>ToDo ToDos</h3>
                        <AddItem addTodo = {props.addTodo}/>
                        {props.todos.length==0 ? <EmptyTodo/> : (
                            <table className="table mb-4" style={{textAlign:"center"}}>
                            <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Todo item</th>
                                    <th scope="col">Desct.</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.todos.map((todo)=>{
                                    return <TodoItem todo = {todo} onDelete={props.onDelete}/>;
                                })}
                                
                            </tbody>
                        </table>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    </>
    );
}
