import React, { Component, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ReactComponent as VisibilityIcon } from '../../assets/icons/visibility_black_48dp.svg';
import { ReactComponent as VisibilityOffIcon } from '../../assets/icons/visibility_off_black_48dp.svg';

import classes from './TextInputLayout.module.css'

interface Props {
    type: string,
    onChange: (event: any) => void,
    icon?: any,
    className?: string,
    placeholder?: string,
    label: string,
    value: string | number | undefined
}

interface State {
    id: string,
    showPassword: boolean,
    type: string
}

export default class TextInputLayout extends Component<Props, State> {
    inputRef: React.RefObject<HTMLInputElement>;

    constructor(props: Props | Readonly<Props>) {
        super(props);

        this.state = {
            id: uuidv4(),
            showPassword: false,
            type: this.props.type
        }

        this.inputRef = React.createRef();

        this.togglePasswordVisibilityOn = this.togglePasswordVisibilityOn.bind(this);
        this.togglePasswordVisibilityOff = this.togglePasswordVisibilityOff.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onClickLabel = this.onClickLabel.bind(this);
        this.applyClassTo = this.applyClassTo.bind(this);

    }

    togglePasswordVisibilityOn() {
        this.setState((currentState) => {
            return {
                showPassword: true,
                type: 'text'
            }
        });
    }

    togglePasswordVisibilityOff() {
        this.setState((currentState) => {
            return {
                showPassword: false,
                type: 'password'
            }
        });
    }

    onChange(event: any) {
        this.props.onChange(event);
    }

    onClickLabel() {
        
        setTimeout(() => {
            this.inputRef.current!.focus();
        }, 50);
    }

    applyClassTo(element:any , className:string) {
        return React.cloneElement(element, {
            className: className
        })
    }

    render() {

        const visibilityIcon = (this.state.showPassword) ?
            <VisibilityIcon className={classes.visibility_icon} onMouseUp={this.togglePasswordVisibilityOff} />
            :
            <VisibilityOffIcon className={classes.visibility_icon} onMouseDown={this.togglePasswordVisibilityOn} />
        return (
            <div className={[classes.container, this.props.className].join(' ')}>
                {this.props.icon && this.applyClassTo(this.props.icon, classes.icon)}
                <div className={classes.input_container}>
                    <input
                        ref={this.inputRef}
                        id={this.state.id}
                        type={this.state.type}
                        className={classes.input}
                        placeholder={this.props.placeholder}
                        required
                        onChange={this.onChange}
                        value={this.props.value}
                    />
                    <label htmlFor={this.state.id} className={classes.label}
                        onMouseDown={this.onClickLabel}
                    >{this.props.label}</label>
                    {(this.props.type === 'password') ? visibilityIcon : null}
                </div>
            </div>

        )
    }
}