import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: 'hide',
      school: '',
      study: '',
      start: '',
      end: '',
      display: []
    };
  }

  //It opens a modal that let's the user input a school or college that he went to
  openModal = (e) => {
    this.setState({ hidden: '' });
  };

  closeModal = () => {
    this.setState({ hidden: 'hide' });
  };

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = (e) => {
    const { school, study, start, end, display } = this.state;
    e.preventDefault();
    this.setState({
      display: display.concat({ school: school, study: study, start: start, end: end }),
      hidden: 'hide',
      school: '',
      study: '',
      start: '',
      end: ''
    });
  };

  render() {
    const { school, study, start, end, display } = this.state;
    return (
      <div>
        <FontAwesomeIcon className="plus-sign" icon={faCirclePlus} onClick={this.openModal} />
        <form className={this.state.hidden} action="" onSubmit={this.submit}>
          <FontAwesomeIcon icon={faXmark} onClick={this.closeModal} />
          <fieldset>
            <legend>Add your education : </legend>
            <label htmlFor="school">High-School/College: </label>
            <input type="text" id="school" name="school" value={school} onChange={this.change} />
            <br />
            <label htmlFor="title">Title of study:</label>
            <input type="text" id="title" name="study" value={study} onChange={this.change} />
            <br />
            <label htmlFor="start-date"> Start date: </label>
            <input type="date" name="start" value={start} id="start-date" onChange={this.change} />
            <label htmlFor="end-date">End date: </label>
            <input type="date" name="end" value={end} id="end-date" onChange={this.change} />
            <br />
            <button type="submit">Add</button>
          </fieldset>
        </form>
        <SchoolAdded schools={this.state.display} />
      </div>
    );
  }
}

export default Education;

class SchoolAdded extends Component {
  render() {
    return (
      <div>
        {this.props.schools.map((school, i) => {
          return (
            <li key={i}>
              <div>{school.school}</div>
              <div>{school.study}</div>
              <div>{school.start} </div>
              <div>{school.end} </div>
            </li>
          );
        })}
      </div>
    );
  }
}
