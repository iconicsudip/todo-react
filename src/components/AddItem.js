import React from "react";
import { useState } from 'react';

export default function AddItem(props) {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const Submit = (e)=>{
        e.preventDefault();
        if(title=="" || desc == ""){
            alert("Give a title and description..");
        }else{
            props.addTodo(title,desc);
        }
        setTitle("");
        setDesc("");
    }
    return (
        <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2" style={{textAlign:"center"}} onSubmit={Submit}>
            <div className="col-12" style={{paddingTop:"2rem"}}>
                <div className="form-outline">
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="form1" className="form-control" />
                    <label className="form-label" htmlFor="form1">
                    Enter a title here
                    </label>
                </div>
            </div>
            <div className="col-12" style={{paddingTop:"2rem"}}>
                <div className="form-outline">
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="form2" className="form-control" />
                    <label className="form-label" htmlFor="form2">
                    Enter a short description here
                    </label>
                </div>
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </div>
{/* 
            <div className="col-12">
                <button type="submit" className="btn btn-warning">
                    Get tasks
                </button>
            </div> */}
        </form>
    );
}
