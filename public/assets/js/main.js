const userNome = document.getElementById("user-nome");
const userEmail = document.getElementById("user-email");
const userTableBody = document.getElementById("users-table-body");

function renderEmtyTable(message){
    userTableBody.innerHTML = `
    <tr>
        <td colspan="3" class="user-table-empty">${message}</td>
    </tr>
    `;
}
function renderUsers(users){
    if(users.length == 0){
        renderEmtyTable("Nenhum usuario cadastrado");
    }else{
        let rowsTemp="";
        for(let i=0;i<users.length;i++){
             rowsTemp+= `
            <tr>
                <td >${users[i].name}</td>
                <td >${users[i].email}</td>
                <td class="user-table-actions-cell">
                    <button class="delete-user-button">
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v8h-2V9zm4 0h2v8h-2v9zM7 9h2v8H7V9zm1 12a2 2 0 0 1-2-2V8h12v11a2 2 0 0 1-2 2H8z"
                                fill="currentColor">
                            </path>
                        </svg>
                    </button>
                </td>
            </tr>
        `;
        }
        userTableBody.innerHTML=rowsTemp;
    }
    
}
async function loadUsers(){
    const response = await fetch("/users");
    if(response.ok){
        const users= await response.json();
        renderUsers(users);
        console.log(response);
    }else{
        renderEmtyTable("Problemas ao obter usuarios");
    }
}
loadUsers()




