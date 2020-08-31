import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import Exercise from './exercise.component';


export default class ExercisesList extends Component {

    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {
            exercises: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/exercises')
            .then(res => {
                this.setState({
                    exercises: res.data,
                })
            })
            .catch(err => console.log('Error: ' + err))
    }

    exerciseList() {
        return this.state.exercises.map(currentexercise => {
          return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
        })
      }

    deleteExercise(id) {
        axios.delete('http://localhost:8080/exercises/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}