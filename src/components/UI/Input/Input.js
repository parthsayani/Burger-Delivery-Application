import React,{Component} from 'react';
import classes from './Input.css';
const input = (props) =>{
    let inputElement=null;
    switch(props.elementType){
        case('input'):
            inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value}/>;
            break;
        case('textarea'):
            inputElement=<textarea {...props} className={classes.InputElement} {...props.elementConfig} value={props.value}/>;
            break;
        default:
            inputElement= <input {...props} className={classes.InputElement} {...props.elementConfig} value={props.value}/>;
        
    }
    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
}
export default input;