import NoteContext from "./noteContext";

const NoteState = (props) => {
    const state = {
        "name" : "myname",
        "age" : "myage" ,
        "lives" : "karachi"
    }
    return(
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;