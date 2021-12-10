import React, { Component, ReactNode } from "react";
import classes from './Button.module.css'

interface Props{
    children: ReactNode
    onClick: ()=> void,
    className?: string
}

export default class Button extends Component<Props>{
    
    constructor(props: Props | Readonly<Props>){
        super(props);

        this.onClick = this.onClick.bind(this);
    }


    onClick(){
        this.props.onClick();
    }

    render(): React.ReactNode {
        
        return(
            <button className={[classes.button, this.props.className].join(' ')} onClick={this.onClick}>
                {this.props.children}
            </button>
        )
    }
}