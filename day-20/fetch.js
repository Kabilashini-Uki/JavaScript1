fetch('https://jsonplaceholder.typicode.com/user')
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.error('error',error))

async function fetchUser(){
    try{
        const response= await fetch('https://jsonplaceholder.typicode.com/user')
        const user= await response.json();
        user.forEach(user=> console.log(user))
        // console.log(JSON.stringify(user, null, 3))
        // console.log(user)

    }
    catch(error) {
        console.error('error',error)
    }
}
fetchUser()

async function loadUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users= await response.json();

        const userList=document.getElementById('userList');
        userList.innerHTML='';

        users.forEach(user=>{
            const li= document.createElement('li');
            li.textContent=`${user.name} (${user.email}`
            userList.appendChild(li)
        });
    }
    catch(error){
        console.error('Error',error)
    }
}
loadUser();