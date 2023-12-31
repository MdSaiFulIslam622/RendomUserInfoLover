const loadUser = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayUsers(data.results))
}


const displayUsers = users => {
    const userContainer = document.getElementById('user-container')
    for(const user of users){
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h3>User Name: ${user.name.first} ${user.name.last}</h3>
        <p>User info: ${user.location.city} ${user.location.country}</p>
        `;
        userContainer.appendChild(userDiv);

    }
}

loadUser();