import React from 'react';
import { Route } from 'react-router-dom';
import Actor from './actor';
import Actors from './actors';
import { ActorsList } from '../data/actors';

const ActorsContainer = (props) =>{
    let actorUrl = ActorsList.map((actor) => {
        return(
            <Route path={`/actors/${actor.url}`} render={() => <Actor name={actor.name} image={actor.img}/>}></Route>
        );
    });

    return(
        <React.Fragment>
             <Route exact path={`/actors/`} render={() => <Actors title="Best Actors"/>}></Route>
            {actorUrl}
        </React.Fragment>
    );  
};

export default ActorsContainer;
