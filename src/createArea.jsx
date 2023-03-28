import React from "react";

function CreateArea(props) {
// const [title,setTitle]=React.useState("")
// const [content,setcontent]=React.useState("")
// const [TitleArray,setTitleArray]=React.useState([]);
// const [ContentArray,setContentArray]=React.useState([])
const [note,setnote]=React.useState({
  title:"",
  content:""
})

function onChange(event){
  const {name,value}=event.target
  setnote((prevnote)=>{
    return {
      ...prevnote,  
      [name]:value
    }
  })
}

function submitNote(event){
  props.onAdd(note)
  event.preventDefault();

}


  return (
    <div>
      <form onSubmit={submitNote}>
        <input name="title" onChange={onChange} placeholder="Title" />
        <textarea name="content" onChange={onChange} placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

// export  {TitleArray};
// export  {ContentArray};

export default CreateArea

// export default {CreateArea,TitleArray,ContentArray};
