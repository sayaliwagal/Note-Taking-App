// If user add a note, add it to the localStorage
showNotes();


let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null)
    {
        notesObj = [];
    } else
    {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notesObj);
    showNotes();
});


// Function to Show Element from localStorage

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null)
    {
        notesObj = [];
    } else
    {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <h1 class="text-center my-4"> Here Is Youre Notes</h1>
            <div class="card corss-btn" style="width: 18rem;">
                <button id="${index}" onclick="deleteNote(this.id)" class="x">
                X
                </button>
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                </div>
            </div>`;
    });

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0)
    {
        notesElm.innerHTML = html;
    } else
    {
        notesElm.innerHTML = `<h1 class="text-center my-4"> You Don't have Saved Notes Here.</h1> `;
    }
}


// Function To Delete A Note 

function deleteNote(index) {
    // console.log("I am deleting", index);

    let notes = localStorage.getItem("notes");
    if(notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// Search Functionality For Searching of the notes 
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
        // console.log(cardTxt)
    })
})