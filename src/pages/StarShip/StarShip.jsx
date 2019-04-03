import React from 'react';
import { Link } from 'react-router-dom';
import styles from './StarShip.module.css';

//use this.props if using class, use props if using const/function

const StarShip = (props) => {


    return (
        <div className="App">

            <h1>Starship {props.starships[props.match.params.id].name}</h1>
            <table>
                <tr>
                    <td>Model: </td>
                    <td>{props.starships[props.match.params.id].model}</td>
                </tr>
                <tr>
                    <td>Passengers:</td>
                    <td>{props.starships[props.match.params.id].passengers}</td>
                </tr>
                <tr>
                    <td>Class:</td>
                    <td>{props.starships[props.match.params.id].starship_class}</td>
                </tr>
                <tr>
                    <td>Learn more:</td>
                    <td>{props.starships[props.match.params.id].url}</td>
                </tr>
            </table>

            <div className={styles.div}>
                <Link to='/'>Return to Starships List</Link>
            </div>



        </div>
    )

}

export default StarShip;