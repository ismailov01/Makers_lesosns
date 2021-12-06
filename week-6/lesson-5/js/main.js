// ! LocalStorage, sessionStorrage

// ! setItem, getItem, removeItem, clear
//!JSON.stringify(), JSON.parse()

let user = {
    name: 'Kuba'
}
// localStorage.setItem('user', JSON.stringify(user)) //! сохранить значение (ключ/значение)
// let data = localStorage.getItem('user') // ! получить данные по ключу в формате строки
// let newData = JSON.parse(data) // ! переводит из строки в наш формат
// localStorage.removeItem('admin') // ! она удаляет данные по ключу 
// localStorage.clear(); //! Удаляет всё


// sessionStorage.setItem('user', JSON.stringify(user)) //!Одна вкладка одна сессия


//! USERS LIST
// let form = $('form')
// let inpName = $('.inp-name')
// let inpAge = $('.inp-age')
// let inpCity= $('.inp-city')
// let input = $('input')
// let tbody = $('#tbody')


// function addUser(event) {
//     event.preventDefault()
//     let name = inpName.val()
//     let age = inpAge.val()
//     let city = inpCity.val()
//     let boolean = true
//     if(!name) {
//         inpName.css('border', '3px solid red')
//         boolean = false
//     } if(!age){
//         inpAge.css('border', '3px solid red')
//         boolean = false
//     } if(!city){
//         inpCity.css('border', '3px solid red')
//         boolean = false
//     } if(!boolean) {
//         return  
//     }
//     let user = {
//         name: name, 
//         age: age, 
//         city: city,
//         id: Date.now()
//     }
//     let users = JSON.parse(localStorage.getItem('list')) || []
//     console.log(users);
//     users.push(user)
//     localStorage.setItem('list', JSON.stringify(users))
//     inpName.val('').css('border', '1px solid')
//     inpAge.val('').css('border', '1px solid')
//     inpCity.val('').css('border', '1px solid')
//     render()
// }

// input.on('input', (e) => {
//     if(e.target.value){
//         $(e.target).css('border', '1px solid')
//     }
// })

// input.on('blur', (e) => {
//     if(!e.target.value) {
//         $(e.target).css('border', '4px solid red')
//     }
// })

// function render() {
//     let users = JSON.parse(localStorage.getItem('list')) || [];
//     tbody.html('')
//     users.forEach((item, index) => {
//         tbody.append(`
//         <tr>
//             <th scope="row">${index + 1}</th>
//             <td>${item.name}</td>
//             <td>${item.age}</td>
//             <td>${item.city}</td>
//         </tr>
//         `)
//     });
// }

// form.on('submit', addUser)

// Import stylesheets
// import './style.css';

// Local Storage. Домашняя работа

// Задание №1
// Создайте в LocalStorage пустой объект localData, с ним в дальнейшем и будем работать
// После этого создайте объект со стилями и положите его в LocalStorage, затем получите его обратно и примените эти стили к "body"

// let task1 = localStorage.getItem('localData');
// task1 = JSON.parse(task1);
// if (task1.styles) {
//   null;
// } else {
//   task1['styles'] = { margin: 0, padding: 0, backgroundColor: 'yellowgreen' };
//   localStorage.setItem('localData', JSON.stringify(task1));
// }
// let task11 = window.localStorage.getItem('localData');
// task11 = JSON.parse(task11);
// $('body').css(task11.styles);

// Задание №2
// Сделайте форму, при submit'е которой, в LocalStorage, в объекте localData создаётся новый объект с ключом и информацией из вашей формы:
// пример нового объекта:
// {
//   key: data
// }
// где key - это value из первого input'а, а data - из второго

// $('#submit1').click(function (e) {
//   e.preventDefault();
//   let key = $('#key').val();
//   let data = $('#data').val();
//   let task2 = window.localStorage.getItem('localData');
//   task2 = JSON.parse(task2);
//   task2[key] = data;
//   window.localStorage.setItem('localData', JSON.stringify(task2));
//   $('#key').val('');
//   $('#data').val('');
//   alert('data saved');
// });

// Задание №3
// Теперь добавьте input и кнопку , при клике на которую - в LocalStorage, в объекте localData будет удаляться значение под ключом input
// Также добавьте кнопку, которая будет удалять весь объект localData из LocalStorage

// $('.btnDel').click(function (e) {
//   let key = $('.inputDel').val();
//   let task3 = window.localStorage.getItem('localData');
//   task3 = JSON.parse(task3);
//   delete task3[key];
//   localStorage.setItem('localData', JSON.stringify(task3));
//   $('.inputDel').val('');
//   alert('data deleted');
// });

// $('.btnClear').click(function (e) {
//   localStorage.setItem('localData', JSON.stringify({}));
//   alert('all data cleared');
// });

// Задание №4
// Создайте форму (<form></form>), которая при клике будет проверять, есть ли в LocalStorage, внутри "localData" массив "productData". Если есть, то добавить в него новый объект из input'ов. Если нет - то создать пустой массив и в него положить новый объект.
// У товаров должен быть уникальный ID - используйте для этого метод Date.now()

// $('#submit2').click(function (e) {
//   e.preventDefault();
//   let prd1 = $('#product1').val();
//   let prd2 = $('#product2').val();
//   let id1 = Date.now();
//   let id2 = Date.now() + 1;
//   let newObj = {};
//   if (prd1) {
//     newObj[id1] = prd1;
//   }
//   if (prd2) {
//     newObj[id2] = prd2;
//   }
//   let task4 = localStorage.getItem('localData');
//   task4 = JSON.parse(task4);
//   if (task4['productData']) {
//     let arr = task4['productData'];
//     arr.push(newObj);
//     localStorage.setItem('localData', JSON.stringify(task4));
//   } else {
//     let arr = [];
//     arr.push(newObj);
//     task4['productData'] = arr;
//     localStorage.setItem('localData', JSON.stringify(task4));
//   }
//   $('#product1').val('');
//   $('#product2').val('');
//   task5();
// });

// Задание №5
// Отразите все объекты из массива productData из предыдущего задания в виде карточек. Предварительно получите его из LocalStorage
// let items = localStorage.getItem('localData');

// if (items) {
//   items = JSON.parse(items);
//   items = items['productData'];
//   if (items) {
//     for (let i = 0; i < items.length; i++) {
//       let obj = items[i];
//       for (let key in obj) {
//         $('.cardList').append(
//           `<div class="prdCard"><h3>${
//             obj[key]
//           }<h3><button class="${key}">delete me</button><button class="${
//             key + 1
//           }">update me</button><div>`
//         );
//         $(`.${key}`).on('click', function () {
//           deleteCard(i, key);
//         });
//         $(`.${key + 1}`).on('click', function () {
//           updateCard(i, key + 1);
//         });
//       }
//     }
//   }
// }

// function task5() {
//   $('.cardList').empty();
//   let items = localStorage.getItem('localData');
//   items = JSON.parse(items);
//   items = items['productData'];
//   for (let i = 0; i < items.length; i++) {
//     let obj = items[i];
//     for (let key in obj) {
//       $('.cardList').append(
//         `<div class="prdCard"><h3>${
//           obj[key]
//         }<h3><button class="${key}">delete me</button><button class="${
//           key + 1
//         }">update me</button><div>`
//       );
//       $(`.${key}`).on('click', function () {
//         deleteCard(i, key);
//       });
//       $(`.${key + 1}`).on('click', function () {
//         updateCard(i, key + 1);
//       });
//     }
//   }
// }

// Задание №6
// Добавьте каждой карточке из предыдущего задания - функцию удаления, при этом, после удаления - карточки должны пезагружаться.
// Положите внутрь карточки <button>Delete product</button> и по клику на него, удаляйте product из LocalStorage и снова рендерите список оставшихся карточек

// function deleteCard(index, key) {
//   let task6 = localStorage.getItem('localData');
//   task6 = JSON.parse(task6);
//   let prdData = task6['productData'];
//   delete prdData[index][key];
//   task6['productData'] = prdData;
//   localStorage.setItem('localData', JSON.stringify(task6));
//   task5();
// }

// Задание №7
// Добавьте функцию редактирования. После сохранения изменений - карточки также должны обновляться
// В карточке создайте кнопку, при нажатии на которую у вас будут появляться input'ы и в них будет отражаться данные редактируемой карточки
// И рядом добавьте кнопку - при нажатии сохраняйте в LocalStorage изменения и снова рендерите product'ы

// function updateCard(index, key) {
//   $('.modal').css({ display: 'block' });
//   let data;
//   $('.updateBtn').on('click', function () {
//     data = $('.updateCard').val();
//     let task7 = localStorage.getItem('localData');
//     task7 = JSON.parse(task7);
//     let prdData = task7['productData'];
//     console.log(key);
//     prdData[index][key] = data;
//     task7['productData'] = prdData;
//     localStorage.setItem('localData', JSON.stringify(task7));
//     task5();
//     $('.modal').css({ display: 'none' });
//   });
//   $('.updateCard').val('');
// }













































































































