console.log("welcome to magic notes");
shownotes();
//if user adds a note , add it to the local storage
let addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", function (e) {
  let addtxt = document.getElementById("addtxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addtxt.value = "";
//   console.log(notesobj);
  shownotes();
});

//Functions to show elements from local storage.
function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id "${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
  });
  let noteselm = document.getElementById("notes");
  if (notesobj.length != 0) {
    noteselm.innerHTML = html;
  } else {
    noteselm.innerHTML = `Nothing to show! use "Add a note" section above to add notes.`;
  }
}

//Function to delete a note.
function deletenote(index) {
//   console.log("I am deleting", index);
  ("");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  shownotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function(){

  let inputVal = search.value;
  console.log("Input event fired!", inputVal);
  let noteCards = document.getElementsByClassName('noteCard')
  Array.from(noteCards).forEach(function(element){
      let cardTxt = element.getElementsByClassName('card-text')[0].innerHTML   
    if(cardTxt.includes(inputVal)){
        element.style.display = 'block'
    }
    else{
        element.style.display = 'none' 
    }
    console.log(cardTxt)
  });
});
