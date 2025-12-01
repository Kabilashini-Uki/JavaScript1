const searchBar=document.getElementById("searchBar")
const load=document.getElementById("load")
const Details=document.getElementById("Details")

let allusers=[];

function loadusers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
        if(!response.ok){
            throw new error('Network response wasnt ok ')
        }
        return response.json();
    })
    .then(users =>{
        allusers=users;
        displayUsers(users)
    })
    .catch(error=>{
     Details.innerHTML='<p class "error">Error:${error.massage}</p>';

    })

      function displayUsers(users){
        Details.innerHTML="";
        if(users.lengt===0){
            Details.innerHTML='<p>No users found</p>'
            return
        }

    }

    users.forEach(user=>{
        const div= document.createElement('div')
        div.className='user';
        div.innerHTML= `
        <stong>${user.name}</stong><br>
        ${user.email}<br>
        ${user.address.city}
        `;
        Details.appendChild(div);
    })
    }

    
  

    



