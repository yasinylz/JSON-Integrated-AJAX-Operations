const btn=document.getElementById("ajax");
btn.addEventListener("click",function(){
    const xhr =new XMLHttpRequest();
    xhr.open("GET","data.json",true);
    xhr.onload=function(){
        const list=document.getElementById("employees");
        if(this.status==200){
            const employees=JSON.parse(this.responseText);
            employees.forEach(employee => {
                list.innerHTML+=`
                <tr>
                <td>${employee.name}</td>
                <td>${employee.phone}</td>
                <td>${employee.salary}</td>
                <td>${employee.age}</td>
              </tr> 
                
                `;
            });
        }
    }
    xhr.send();
})