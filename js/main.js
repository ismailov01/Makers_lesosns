//! Типы запросов

const API = "http://localhost:8000/products";
//! GET
//! fetch
// function getData() {
//     fetch(API)
//         .then(response => {
//             console.log(response);
//             if(response.ok){
//                 return response.json()
//             } else {
//                 console.log(response.statusText);
//             }
//         })
//         .then((data) => console.log(data))
// }
// getData()

//! axios
// async function getDataAxios() {
//     try{
//         const { data } = await axios(API);
//         console.log(data);
//     }catch(e){
//         const status = e.response.status
//         if(status == 404) {
//             console.log('Enter correct network');
//         } else if(status == 500){
//             console.log('Server not found');
//         } else if(status == 403){
//             console.log('Dont sign up');
//         }
//     }
// }
// getDataAxios()

// const num = 10;
// try{
//     num = 20;
// } catch(error){
//     console.log(error);
// }

//! POST
// let input = document.querySelector('input')
// let btn = document.querySelector('button')
//! fetch
// const addProduct = () => {
//     let value = input.value
//     let product = {
//         title: value
//     };
//     fetch(API, {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(product)
//     })
// }
// btn.addEventListener('click', addProduct)

//! axios
// const addProduct = async () => {
//     let value = input.value
//     let product =  {
//         title: value,
//     }
//    const res = await axios.post(API, product)
//    console.log(res);
// }
// btn.addEventListener('click', addProduct)

//! PUT - заменяет весь объект на переданный объект
//! PATCH - заменяет только те поля которые были переданы, остальные поля не трогает 

function updateProduct() {
    let editedProduct = {
        title: 'MacBook M1pro'
    }
    //!fetch
    // fetch(`${API}/1`, {
    //     method: 'PATCH',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(editedProduct)
    // })
    //! axios
    axios.patch(`${API}/2`, editedProduct)
}
updateProduct()


















































































































































































