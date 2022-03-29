import { Component } from 'react';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    };
  }

  render() {
    return (
      <fieldset>
        <legend>Provide your contact information: </legend>
        <label htmlFor="first-name">First name:</label>
        <input id="first-name" type="text" required />
        <br />
        <label htmlFor="last-name">Last name: </label>
        <input id="last-name" type="text" required />
        <br />
        <label htmlFor="mail">Email: </label>
        <input id="mail" type="email" required />
        <br />
        <label htmlFor="phone">Phone number: </label>
        <input id="phone" type="tel" required />
      </fieldset>
    );
  }
}

export default GeneralInfo;
