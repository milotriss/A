const todoList = [
]
let index

if (!(JSON.parse(localStorage.getItem("todoList")))) {
    localStorage.setItem('todoList',JSON.stringify(todoList))
}

function renderTodo(){
    event.preventDefault()
    let db = JSON.parse(localStorage.getItem('todoList'))
    let listWork = document.querySelector('.list-work')
    listWork.innerHTML = ""
    db.forEach((item,index) => {
        
            listWork.innerHTML += 
            `
                <li>
                    <div class="check">
                        <input  onclick="cross(${index})"  type="checkbox">
                        <label class="checkBox" class="label">${item.nameWork}</label>
                    </div>
                    <div class="push">
                        <i onclick="openEdit(${index})" style="color:red;" class="fa-solid fa-pen"></i>
                        <i onclick="openModel(${index})" style="color:blue;"class="fa-solid fa-trash"></i>
                    </div>
                </li>
            `
        })
    }
renderTodo()

//add
function add(){
    let inputWork = document.getElementById('input-work')
    let listWork = inputWork.value
    let newTodo = {
        nameWork: listWork,
        status: 1,
    }
    let db = JSON.parse(localStorage.getItem('todoList'))
    db.push(newTodo)
    // console.log(db);
    localStorage.setItem('todoList', JSON.stringify(db))
    document.getElementById('input-work').value = ""
    renderTodo()
}

//delete
function openModel(i){
    document.querySelector('.model-delete').style.display = "flex"
    index = i
}
function deleteWork(){
    let db = JSON.parse(localStorage.getItem('todoList'))

    let newDb =  db.filter((item,i)=>{
        return index != i
    })
    localStorage.setItem('todoList',JSON.stringify(newDb))
    document.querySelector('.model-delete').style.display = "none"
    renderTodo()
}
function offPopUp(){
    document.querySelector('.model-delete').style.display = "none"
}


//edit
function cross(i) {
    let check  = document.querySelectorAll(".checkBox");
    check[i].classList.toggle("active");
    let complete = document.getElementById("complete");
}

function openEdit(i){
    document.getElementById('edit').style.display = "block"
    index = i
}
function edit() {
    event.preventDefault()
    let input = document.getElementById("editInput");
    let inputValue = input.value;
    let db = JSON.parse(localStorage.getItem("todoList"));
    db[index].nameWork = inputValue;
    localStorage.setItem("todoList", JSON.stringify(db));
    renderTodo();
    document.getElementById('editInput').value = ""
    document.getElementById('edit').style.display = "none"
}