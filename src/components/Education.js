import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faXmark, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';
import uniqid from 'uniqid';

function Education() {
  const [school, setSchool] = useState({ school: '', study: '', start: '', end: '', uniqid: uniqid() });
  const [schools, setSchools] = useState([]);
  const [hidden, setHidden] = useState('');
  //It opens a modal that let's the user input a school or college that he went to
  const openModal = (e) => {
    if (hidden === '') setHidden('hide');
    else setHidden('');
  };

  const closeModal = () => {
    setHidden('hide');
  };

  const change = (e) => {
    setSchool((school) => {
      return { ...school, [e.target.name]: e.target.value };
    });
  };

  const submit = (e) => {
    e.preventDefault();
    setSchools((schools) => {
      return schools.concat(school);
    });
    setSchool({ school: '', study: '', start: '', end: '', uniqid: uniqid() });
  };

  const handleDelete = (e) => {
    setSchools((schools) => {
      schools.filter((school) => {
        return school.uniqid !== e.target.id && school.uniqid !== e.target.parentElement.id;
      });
    });
  };

  return (
    <div className="education-container">
      <FontAwesomeIcon className="plus-sign" icon={faCirclePlus} onClick={openModal} />
      <form className={hidden} id="to-hide" action="" onSubmit={submit}>
        <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
        <fieldset>
          <legend>Add your education : </legend>
          <label htmlFor="school">High-School/College: </label>
          <input type="text" id="school" name="school" value={school.school} required onChange={change} />
          <br />
          <label htmlFor="title">Title of study:</label>
          <input type="text" id="title" name="study" value={school.study} required onChange={change} />
          <br />
          <label htmlFor="start-date"> Start date: </label>
          <input type="date" name="start" value={school.start} id="start-date" required onChange={change} />
          <label htmlFor="end-date">End date: </label>
          <input type="date" name="end" value={school.end} id="end-date" required onChange={change} />
          <br />
          <button type="submit" className="submit">
            Add
          </button>
        </fieldset>
      </form>
      <div>
        <SchoolAdded schools={schools} delete={handleDelete} />
      </div>
    </div>
  );
}

export default Education;

function SchoolAdded(props) {
  return (
    <div>
      {props.schools.map((school, i) => {
        return (
          <div className="display-education-container">
            <div>
              School: {school.school}, studying {school.study}
            </div>
            <div>Started on: {school.start} </div>
            <div>Ended on: {school.end} </div>
            <FontAwesomeIcon icon={faTrashCan} id={school.uniqid} className="trash" onClick={props.delete} />
          </div>
        );
      })}
    </div>
  );
}
