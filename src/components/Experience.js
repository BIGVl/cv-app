import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faXmark, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';
import uniqid from 'uniqid';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      job: '',
      description: '',
      start: '',
      end: '',
      hidden: 'hide',
      display: []
    };
  }

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
    const { company, job, description, start, end, display } = this.state;
    e.preventDefault();

    this.setState({
      display: display.concat({ company: company, job: job, description: description, start: start, end: end, uniqid: uniqid() }),
      company: '',
      job: '',
      description: '',
      start: '',
      end: '',
      hidden: 'hide'
    });
  };

  delete = (e) => {
    this.setState({
      display: this.state.display.filter((job) => {
        return job.uniqid !== e.target.id && job.uniqid !== e.target.parentElement.id;
      })
    });
  };

  render() {
    const { company, job, description, start, end } = this.state;
    return (
      <div>
        <FontAwesomeIcon className="add-exp" icon={faCirclePlus} onClick={this.openModal} />
        <form action="" className={this.state.hidden} id="to-hide" onSubmit={this.submit}>
          <FontAwesomeIcon className="close-exp" icon={faXmark} onClick={this.closeModal} />
          <fieldset>
            <legend>Add a previous job: </legend>
            <label htmlFor="company">Company name: </label>
            <input type="text" name="company" id="company" required value={company} onChange={this.change} />
            <br />
            <label htmlFor="job">Job title: </label>
            <input type="text" name="job" id="job" required value={job} onChange={this.change} />
            <br />
            <label htmlFor="description">Job description: </label>
            <textarea type="text" name="description" required value={description} id="description" onChange={this.change} />
            <br />
            <label htmlFor="start">Start date:</label>
            <input type="date" name="start" id="start" required value={start} onChange={this.change} />
            <br />
            <label htmlFor="end">End date: </label>
            <input type="date" name="end" id="end" required value={end} onChange={this.change} />
            <br />
            <button type="submit" className="submit">
              Add
            </button>
          </fieldset>
        </form>
        <div className="display-experience-container">
          <Jobs jobs={this.state.display} delete={this.delete} />
        </div>
      </div>
    );
  }
}

export default Experience;

class Jobs extends Component {
  render() {
    return (
      <div>
        {this.props.jobs.map((job) => {
          return (
            <div key={job.uniqid} className="display-experience-container">
              <div>Company name: {job.company}</div>
              <div>Job title: {job.job} </div>
              <div>Description: {job.description}</div>
              <div>Started on: {job.start} </div>
              <div>Ended on: {job.end} </div>
              <FontAwesomeIcon icon={faTrashCan} className="trash" onClick={this.props.delete} id={job.uniqid} />
            </div>
          );
        })}
      </div>
    );
  }
}
