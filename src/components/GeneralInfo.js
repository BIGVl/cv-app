import { Component } from 'react';
import '../styles/App.css';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      editing: true,
      display: {
        fullName: '',
        email: '',
        phone: ''
      }
    };
  }

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = (e) => {
    const { firstName, lastName, email, phone } = this.state;
    e.preventDefault();

    this.setState({ display: { fullName: `${firstName} ${lastName}`, email: email, phone: phone }, editing: false });
  };

  edit = (e) => {
    this.setState({ editing: true });
    console.log(this.state.editing);
  };

  render() {
    const { firstName, lastName, email, phone, display } = this.state;
    if (this.state.editing === true) {
      return (
        <form onSubmit={this.submit} className="general-info-form">
          <fieldset className="general-info-fieldset">
            <legend>Provide your contact information: </legend>
            <label htmlFor="first-name">First name:</label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              value={firstName}
              required
              pattern="^[a-zA-Z]+$"
              onChange={this.change}
            />
            <br />
            <label htmlFor="last-name">Last name: </label>
            <input
              spellCheck="false"
              id="last-name"
              name="lastName"
              type="text"
              value={lastName}
              required
              onChange={this.change}
            />
            <br />
            <label htmlFor="mail">Email: </label>
            <input id="mail" name="email" type="email" value={email} required onChange={this.change} />
            <br />
            <label htmlFor="phone">Phone number: </label>
            <input id="phone" name="phone" type="tel" required value={phone} onChange={this.change} />
            <br />
            <button className="submit" type="submit">
              Submit
            </button>
          </fieldset>
        </form>
      );
    } else if (this.state.editing === false) {
      return (
        <div className="general-info-container">
          <div className="display-full-name">{display.fullName}</div>
          <div className="display-email">Email: {display.email} </div>
          <div className="display-phone">Phone number: {display.phone} </div>
          <button className="edit" onClick={this.edit}>
            Edit
          </button>
        </div>
      );
    }
  }
}

export default GeneralInfo;
