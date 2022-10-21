let input=document.querySelector('.entered-list');
let addBtn=document.querySelector('.add-list');
let tasks=document.querySelector('.tasks');


input.addEventListener('keyup',() =>{
if(input.value.trim() !== 0){
    addBtn.classList.add('active')

} else{
    addBtn.classList.remove('active')
}


})


addBtn.addEventListener('click', () => {
    if(input.value.trim() !== 0){
        const tasks2 = document.getElementById("alltasks").childElementCount
        let newItem=document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `\
        <p id="item-${tasks2+1}"> ${input.value} </p>\
        <div class="item-btn">\
            <i class="fa-solid fa-check"></i>\
            <i id="edit-${tasks2+1}" class="fa-regular fa-pen-to-square"></i>\
            <i class="fa-solid fa-xmark"></i>\
           
        </div>\ 
        `
        
        tasks.appendChild(newItem);
        input.value='';
    } else{
        alert('please enter a task')
        }
    
} )
//delete item from the list

tasks.addEventListener('click',(e) => {
    if (e.target.classList.contains('fa-xmark'))  {
        e.target.parentElement.parentElement.remove();
    }
})
//mark item as completed
tasks.addEventListener('click', (e) => {
    if  (e.target.classList.contains( 'fa-check' )) {
         e.target.parentElement.parentElement.classList.toggle('completed');
         
    }
})

//edit item 
tasks.addEventListener('click',(e)=>{
if ( e.target.classList.contains('fa-pen-to-square')){
    let id = e.target.id
    id = id.replace('edit', 'item')
    const val = document.getElementById(id).innerText
    document.getElementById('myinput').value = val

    document.getElementById('add-list-id').classList.add('hidden')
    document.getElementById('edit-list-id').classList.remove('hidden')

    document.getElementById('edit-list-id').setAttribute('onclick', `editTodo('${id}')`)

}

})

function editTodo(id){
    document.getElementById(id).innerText = document.getElementById('myinput').value
    document.getElementById('add-list-id').classList.remove('hidden')
    document.getElementById('edit-list-id').classList.add('hidden')
    document.getElementById('myinput').value = ''

}
