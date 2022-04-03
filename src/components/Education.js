import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faXmark, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';
import uniqid from 'uniqid';

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
    if (this.state.hidden === '') this.setState({ hidden: 'hide' });
    else this.setState({ hidden: '' });
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
      display: display.concat({ school: school, study: study, start: start, end: end, uniqid: uniqid() }),
      hidden: 'hide',
      school: '',
      study: '',
      start: '',
      end: ''
    });
  };

  delete = (e) => {
    this.setState({
      display: this.state.display.filter((school) => {
        return school.uniqid !== e.target.id && school.uniqid !== e.target.parentElement.id;
      })
    });
  };

  render() {
    const { school, study, start, end, display } = this.state;
    return (
      <div className="education-container">
        <FontAwesomeIcon className="plus-sign" icon={faCirclePlus} onClick={this.openModal} />
        <form className={this.state.hidden} id="to-hide" action="" onSubmit={this.submit}>
          <FontAwesomeIcon icon={faXmark} onClick={this.closeModal} />
          <fieldset>
            <legend>Add your education : </legend>
            <label htmlFor="school">High-School/College: </label>
            <input type="text" id="school" name="school" value={school} required onChange={this.change} />
            <br />
            <label htmlFor="title">Title of study:</label>
            <input type="text" id="title" name="study" value={study} required onChange={this.change} />
            <br />
            <label htmlFor="start-date"> Start date: </label>
            <input type="date" name="start" value={start} id="start-date" required onChange={this.change} />
            <label htmlFor="end-date">End date: </label>
            <input type="date" name="end" value={end} id="end-date" required onChange={this.change} />
            <br />
            <button type="submit" className="submit">
              Add
            </button>
          </fieldset>
        </form>
        <div>
          <SchoolAdded schools={display} delete={this.delete} />
        </div>
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
            <div className="display-education-container">
              <div>
                School: {school.school}, {school.study}
              </div>
              <div>Started on: {school.start} </div>
              <div>Ended on: {school.end} </div>
              <FontAwesomeIcon icon={faTrashCan} id={school.uniqid} className="trash" onClick={this.props.delete} />
            </div>
          );
        })}
      </div>
    );
  }
}
