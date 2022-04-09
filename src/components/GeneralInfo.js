import { useState } from 'react';
import '../styles/App.css';

function GeneralInfo() {
  const [generalInfo, setGeneralInfo] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [isEditing, setEditing] = useState(true);

  const change = (e) => {
    setGeneralInfo((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submit = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  const edit = (e) => {
    setEditing(true);
  };

  if (isEditing === true) {
    return (
      <form onSubmit={submit} className="general-info-form">
        <fieldset className="general-info-fieldset">
          <legend>Provide your contact information: </legend>
          <label htmlFor="first-name">First name:</label>
          <input
            id="first-name"
            name="firstName"
            type="text"
            value={generalInfo.firstName}
            required
            pattern="^[a-zA-Z]+$"
            onChange={change}
          />
          <br />
          <label htmlFor="last-name">Last name: </label>
          <input
            spellCheck="false"
            id="last-name"
            name="lastName"
            type="text"
            value={generalInfo.lastName}
            required
            onChange={change}
          />
          <br />
          <label htmlFor="mail">Email: </label>
          <input id="mail" name="email" type="email" value={generalInfo.email} required onChange={change} />
          <br />
          <label htmlFor="phone">Phone number: </label>
          <input id="phone" name="phone" type="tel" required value={generalInfo.phone} onChange={change} />
          <br />
          <button className="submit" type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    );
  } else if (isEditing === false) {
    return (
      <div className="general-info-container">
        <div className="display-full-name">{generalInfo.firstName + ' ' + generalInfo.lastName}</div>
        <div className="display-email">Email: {generalInfo.email} </div>
        <div className="display-phone">Phone number: {generalInfo.phone} </div>
        <button className="edit" onClick={edit}>
          Edit
        </button>
      </div>
    );
  }
}

export default GeneralInfo;
