import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note"
import CreateArea from "./createArea";




function App(){

    const [notes,setNotes]=React.useState([]);
function addNote(note){
    setNotes((prevItem)=>{
        return [...prevItem,note]
    })
    // console.log(note)

}
function deleteNote(index){
    console.log(index)
    setNotes((prevItem)=>{
        return prevItem.filter((x,itemindex)=>{
            return itemindex!==index
        })
    })

}
    return(
        <div>
            <Header />
            <CreateArea 
            onAdd={addNote}/>




            {/* <Note title="first" content="first app note"/> */}
            {notes.map((note,index)=>{
                return(<Note 
                key={index}
                id={index}


                onDelete={deleteNote}
                title={note.title}
                 content={note.content}
                 />)
            })}
            



            <Footer />
        </div>
    )
}
export default App;