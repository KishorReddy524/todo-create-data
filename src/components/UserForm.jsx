import { useState } from "react";
function UserForm() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phonenumber: ""
  });
  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contactInfo);
    setContactInfo({ name: "", email: "", phonenumber: "" });
  };

  return (
    <div className="form-container">
      <form>
        <div>
          <h3>Contact Form</h3>
        </div>
        <div>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Name"
            value={contactInfo.name}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email"
            value={contactInfo.email}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="number"
            name="phonenumber"
            placeholder="Phone Number"
            value={contactInfo.phonenumber}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit Contact</button>
        </div>
      </form>
    </div>
  );
}
function UserList({ contacts }) {
  return (
    <div>
      {contacts.map((contact) => (
        <div className="card" key={contact.phonenumber}>
          <p className="card-name">{contact.name}</p>
          <p>{contact.email}</p>
          <p>{contact.phonenumber}</p>
        </div>
      ))}
    </div>
  );
}
function App() {
  // here we create an array state to store the contact form data
  const [contacts, updateContacts] = useState([]);

  const addContact = (contact) => {
    updateContacts([...contacts, contact]);
  };
  console.log("sdfghj", contacts);

  return (
    <div className="App">
      <UserForm addContact={addContact} />
      <UserList contacts={contacts} />
    </div>
  );
}

export default App;
