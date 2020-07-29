import React from 'react'
import { ActorsList } from '../data/actors'
import { Link } from 'react-router-dom';

const Actors = (props) =>{

    let actors = ActorsList.map((person) => {
        return(
            <div className="actor-container">
                <Link to={`/actors/${person.url}`}>
                    <div className="actor-image" style={{ backgroundImage:"url("+  person.img +")"}}>
                        {/* <img src={person.img} alt={person.name} /> */}
                    </div>
                    <h3>{person.name}</h3>
                </Link>
            </div>
        );
    });
    return(
        <div className="main-content">
            <div><Link className="back" to="/">Back</Link></div>
            <h2>{props.title}</h2>              
            <div className="container">                
                { actors }
            </div>
        </div>
    );   
    
};

export default Actors;