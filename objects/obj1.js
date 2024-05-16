fetch("https://jsionplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data=>{
  var tr =document.querySelector("tbody")
  data.map((user)=>{
    var tr=document.createElement("tr")
    tr.innerHTML =`
         <td>${user.id}</td>
         <td>${user.login}</td>
         <td><img height="200px" src="${user.avatar_url}" alt=""></td>
        `    
     tbody.appendChild(tr)
  })
})