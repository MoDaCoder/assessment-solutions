const text = document.getElementById('text')
const apiURL = 'https://sv-reqres.now.sh/api/offers'

// Data.fetchData()
// console.log(text)

// //Need to map through nested object data
// async function getData() {
//     const resp = await fetch(api_url);
//     const obj = await resp.json();
//     const data = obj;
//     console.log(data)

//     // console.log(data.data[0].category)
//     // console.log(data.data[0].description)
//     // console.log(data.data[0].mediaurl)
//     // console.log(data.data[0].recid)
//     // console.log(data.data[0].redeemstart)
//     // console.log(data.data[0].title)
// }

// function renderData(data){
//     console.log(data)
//     const span = document.createElement('span')
//     span.innerText = data
// }

// getData()
// renderData()

// function fetchData() {
//     // event.preventDefault()
//     fetch(apiURL)
//     .then(res => res.json())
//     .then(datas => {
//         for (let data of datas.data) {
//             let newData = (data)
//         }
//         renderData()
//     })
// }

//     function renderData(){
//         // const div = document.createElement('div')
//         // const img = document.createElement('img')
//         const h2 = document.createElement('h2')
//         // const span = document.createElement('span')
//         // div.recid = this.rceid
//         // img.src = this.image
//         // img.image = this.image
//         h2.interText = this.title
//         // span.innerText = this.description
//         text.append(h2)
//         // div.appendChild(h2)
//     }

fetchData()
renderData()