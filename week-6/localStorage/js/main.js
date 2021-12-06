let btn = $('.btn')
let input = $('.task-input')
let list = $('.task-list')

btn.on('click', function() {
    if(!input.val()){
        alert('Enter data')
        return
    }
    let obj = {
        task: input.val()
    }
    // list.append(`<li>${value}</li>`)
    setItemToStorage(obj)
    render()
    input.val('')
})

function setItemToStorage(task) {
    if(!localStorage.getItem('tasks-data')) {
        localStorage.setItem('tasks-data', '[]')
    }
    let data = JSON.parse(localStorage.getItem('tasks-data'))
    data.push(task)
    localStorage.setItem('tasks-data', JSON.stringify(data))
    // localStorage.getItem()
}

function render() {
    if(!localStorage.getItem('tasks-data')) {
        localStorage.setItem('tasks-data', '[]')
    }
    let newData = JSON.parse(localStorage.getItem('tasks-data'))
    // console.log(newData);
    list.html('')
    newData.forEach(item => {
        list.append(`<li>${item.task}<button class="btn-delete">Delete</button></li>`)
    });
}


$('body').on('click', '.btn-delete', function() {
    // console.log($(this).parent().index());
    let data = JSON.parse(localStorage.getItem('tasks-data'));
    // console.log(data);
    let index = $(this).parent().index();
    data.splice(index, 1)
    localStorage.setItem('tasks-data', JSON.stringify(data))
    render()
})
render()
















































































































































































