function User({name, role}){
    return (
        <div classname="main">
            <h2>Name:{name}</h2>
            <p>Role:{role}</p>
        </div>
    );
}
function UserList() {
const users = [
    { name: "Maryam", role: "Admin" },
    { name: "Ali", role: "Editor" },
    { name: "Sara", role: "Subscriber" }
  ];

  return (
    <div>
      <h1>User List</h1>
      {users.map((user, index) => (
        <User key={index} name={user.name} role={user.role} />
      ))}
    </div>
  );
}
export {UserList};
export default User;