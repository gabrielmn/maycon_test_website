import React, { Component, ReactNode } from "react";
import classes from './Text.module.css'

interface Props{
    children: ReactNode,
    className?: string
}

export default class Text extends Component<Props>{

    render(): React.ReactNode {
        return(
            <h1 className={[classes.text, this.props.className].join(' ')}>
                {this.props.children}
            </h1>
        )
    }
}