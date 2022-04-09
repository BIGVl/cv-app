import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faXmark, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';
import uniqid from 'uniqid';

function Experience() {
  const [hidden, setHidden] = useState('hide');
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState({ company: '', job: '', description: '', start: '', end: '', uniqid: uniqid() });

  const openModal = (e) => {
    if (hidden === '') setHidden('hide');
    else setHidden('');
  };

  const closeModal = () => {
    setHidden('hide');
  };

  const change = (e) => {
    setJob((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submit = (e) => {
    e.preventDefault();
    setJobs(jobs.concat(job));
    setJob({ company: '', job: '', description: '', start: '', end: '', uniqid: uniqid() });
    setHidden('hide');
  };

  const handleDelete = (e) => {
    setJobs((jobs) => {
      return jobs.filter((job) => {
        return job.uniqid !== e.target.id && job.uniqid !== e.target.parentElement.id;
      });
    });
  };

  return (
    <div>
      <FontAwesomeIcon className="add-exp" icon={faCirclePlus} onClick={openModal} />
      <form action="" className={hidden} id="to-hide" onSubmit={submit}>
        <FontAwesomeIcon className="close-exp" icon={faXmark} onClick={closeModal} />
        <fieldset>
          <legend>Add a previous job: </legend>
          <label htmlFor="company">Company name: </label>
          <input type="text" name="company" id="company" value={job.company} required onChange={change} />
          <br />
          <label htmlFor="job">Job title: </label>
          <input type="text" name="job" id="job" value={job.job} required onChange={change} />
          <br />
          <label htmlFor="description">Job description: </label>
          <textarea type="text" name="description" value={job.description} required id="description" onChange={change} />
          <br />
          <label htmlFor="start">Start date:</label>
          <input type="date" name="start" id="start" value={job.start} required onChange={change} />
          <br />
          <label htmlFor="end">End date: </label>
          <input type="date" name="end" id="end" value={job.end} required onChange={change} />
          <br />
          <button type="submit" className="submit">
            Add
          </button>
        </fieldset>
      </form>
      <div className="display-experience-container">
        <Jobs jobs={jobs} delete={handleDelete} />
      </div>
    </div>
  );
}

export default Experience;

function Jobs(props) {
  return (
    <div>
      {props.jobs.map((job) => {
        return (
          <div key={job.uniqid} className="display-experience-container">
            <div>Company name: {job.company}</div>
            <div>Job title: {job.job} </div>
            <div>Description: {job.description}</div>
            <div>Started on: {job.start} </div>
            <div>Ended on: {job.end} </div>
            <FontAwesomeIcon icon={faTrashCan} className="trash" onClick={props.delete} id={job.uniqid} />
          </div>
        );
      })}
    </div>
  );
}
