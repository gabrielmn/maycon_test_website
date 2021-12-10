import React, {Component} from 'react';
import classes from './NotFound.module.css';

export default class NotFound extends Component{

    render(){
        
        return(
            <div className={classes.container}>
                <h1 className={classes.error}>Not Found 404</h1>
                <h1 className={classes.text}>Sorry something went wrong please try again.</h1>
            </div>
        );
    }

}