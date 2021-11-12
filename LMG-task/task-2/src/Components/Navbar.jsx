 // eslint-disable-next-line
import React from 'react';

const Navbar = (props) => {

  const loadUsers = async()=>{
    console.log('before');
    props.setLoading(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    console.log(jsonresponse.data);
    props.setUsers(jsonresponse.data);
    setTimeout(() => {
      props.setLoading(false);
    }, 3000);
  }
  return (
        <div className="navbar">
            <div className="brand-and-toggler">
          <h1 className="navbar-brand">ZIPPY</h1>
        <button onClick={loadUsers}>Get Users</button>
      </div>

      </div>
  );
}

export default Navbar;
