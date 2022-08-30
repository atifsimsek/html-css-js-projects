const addBtn = document.querySelector(".add-notes");

const notes = JSON.parse(localStorage.getItem("notes"));




if(notes)
{
    notes.forEach(note => {
        addNote(note);
    });
    
}
addBtn.addEventListener("click", () => addNote())

function addNote(text = '') {
    const note = document.createElement("div");
    note.className = "note";
    note.innerHTML =
        `
            <div class="tools">
                <button class="update"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
            </div>

            <div id="main" class="main ${text ? "" : "hidden"}"></div>
            <textarea id="text" class="${text ? "hidden" : ""}"></textarea>

        `


    

    const deleteBtn = note.querySelector(".delete");
    const updateBtn = note.querySelector(".update");
    const textArea = note.querySelector("#text");
    const div = note.querySelector("#main");

    textArea.value = text;
    div.innerHTML = marked(text);


    deleteBtn.addEventListener("click",()=>{

        note.remove();

        updateLS();
    })



    updateBtn.addEventListener("click", () => {

        div.classList.toggle("hidden");
        textArea.classList.toggle("hidden");

    })

    textArea.addEventListener("input",(e) =>{
        console.log(e.target.value)
        const {value} = e.target;
        div.innerHTML = marked(value);
        
        updateLS();
            


    } )

    document.body.appendChild(note)

}

function updateLS(){

    const notesText = document.querySelectorAll("textarea");

    const notes = [];


    notesText.forEach(note => {

       notes.push(note.value)
        
    });


    localStorage.setItem("notes",JSON.stringify(notes));





}


