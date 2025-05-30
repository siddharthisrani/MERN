import React,{useState} from 'react'

const App = () => {
 const [user, setUser] = useState({
    name: "",
    age: "",
    city: ""
  });

  const handleChange = (e) => {
  
    const {name,value}=e.target

    setUser({...user,[name]:value})

  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <input name="name"  value={user.name} onChange={handleChange} />
      <input name="age"  value={user.age} onChange={handleChange} />
      <input name="city"  value={user.city} onChange={handleChange} />
      <p>{user.name} is {user.age} years old and lives in {user.city}.</p>
    </div>
  );
}

export default App