import React from "react";
function Note(props){

function deletenote(){
    props.onDelete(props.id)
}

    return(
        <div className="note">
            <h1 style={{textTransform: 'capitalize'}}>
                {props.title}
            </h1>
            <p>{props.content}</p>
            <button onClick={deletenote}>DELETE</button>
        </div>
     
    )
}
export default Note;