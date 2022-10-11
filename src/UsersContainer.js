import EachUserDropdown from "./EachUserDropdown";
import React, {useState, useEffect} from "react";
import NewUserForm from "./NewUserForm";

function UsersContainer({users, setFavorites, setUsers, newUser, setCurrentUser, currentUser}) {

  
  
  

  function handleClick(e) {
    e.preventDefault();
    setCurrentUser(e.target.value)

  }

    return (
      <div>
        <h1>Users</h1>
        <select onChange={handleClick}>
          {users.map(user => <option key={user.id} value={user.id}> {user.first_name} {user.last_name}</option>)}
        </select>
        {/* <h2>Welcome, {currentUser}</h2> */}
        <NewUserForm newUser={newUser}/>
        {console.log(currentUser)}
      </div>
    );
  }


  export default UsersContainer;