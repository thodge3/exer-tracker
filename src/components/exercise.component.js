import React from 'react';
import { Link } from 'react-router-dom';

function Exercise(props) {

    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0, 10)}</td>
            <td>
                <Link to={"/edit/" + props.exercise._id}><button type="button" className="btn btn-outline-primary">edit</button></Link> <button type="button" className="btn btn-outline-danger" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</button>

            </td>
        </tr>
    )
}

export default Exercise;