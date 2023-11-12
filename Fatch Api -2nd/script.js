async function apiCall() {
    let url = await fetch('https://jsonplaceholder.typicode.com/users')
    let res = await url.json()
    fatchfun(res)
}

function fatchfun(user) {
    user.slice(0, 9).forEach(element => {
        const { name, email, phone, id } = element
        // console.log(id);
        let parentDiv = document.getElementById('parent')
        let childDiv = document.createElement('div')
        let imgId = Math.floor(Math.random() * 300)
        // console.log(imgId);
        // let img = [`https://picsum.photos/id/${imgId}/300/300`]
        // console.log(img);
        childDiv.innerHTML = ` <div class="child">
        <img src="https://picsum.photos/id/${imgId}/300/300" alt="">
        <h1>Name : <span>${name}</span></h1>
        <h3>Email: <span>${email}</span></h3>
        <p>Phone : ${phone}</p>
        <button onclick="popupShow(${id}, ${imgId})">details</button>
        </div>`
        parentDiv.appendChild(childDiv)
    });
}
let popup = document.getElementById('showpopup')
async function popupShow(id, img) {

    // console.log(id);
    let url = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    let res = await url.json()
    const { name, email, username, address: { street, city }, phone, company: { name: cname } } = res

    popup.style.display = 'block'
    popup.innerHTML = `
    <div><img src="https://picsum.photos/id/${img}/300/300" alt=""></div>
    <div>
        <h3>name : <span>${name}</span></h3>
        <h3>username : <span>${username}</span></h3>
        <h3>email: <span>${email}</span></h3>
        <h3>address : street : <span>${street}</span> city : <span>${city}</span></h3>
        <h3>phone : <span>${phone}</span></h3>
        <h3>company : <span>${cname}</span></h3>
        <button onclick="closec ()">❌</button>
    </div>`
}

const closec = () => {
    // console.log('hello');
    document.getElementById("showpopup").style.display = "none";
}


apiCall()