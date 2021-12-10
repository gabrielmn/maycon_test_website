import React, { Component } from "react";
import Button from '../../components/Button/Button';
import TextInputLayout from '../../components/TextInputLayout/TextInputLayout';
import { ReactComponent as EmailIcon } from '../../assets/icons/email_black_48dp.svg';
import { ReactComponent as PasswordIcon } from '../../assets/icons/lock_black_48dp.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { withRouter, RouteComponentProps } from "react-router-dom";

import classes from './LoginScreen.module.css';

interface Props extends RouteComponentProps {

}

interface State {
    email: string,
    password: string
}

export default withRouter(class LoginScreen extends Component<Props, State>{

    constructor(props: Props | Readonly<Props>) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onClickRegister = this.onClickRegister.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
        this.onClickForgotPassword = this.onClickForgotPassword.bind(this);
    }

    onChangeEmail(event: any): void {
        this.setState((current) => {
            return {
                email: event.target.value
            }
        })
    }

    onChangePassword(event: any): void {
        this.setState((current) => {
            return {
                password: event.target.value
            }
        })
    }

    onClickLogin(): void {
        this.props.history.push('/panel')
    }

    onClickRegister(): void {
        alert("Not implemented");
    }

    onClickForgotPassword(): void {
        alert("Not implemented");
    }


    render(): React.ReactNode {

        return (
            <div className={classes.screen}>
                <div className={classes.card}>

                    <LogoIcon width={240} height={240} />
                    <TextInputLayout
                        className={classes.card_input}
                        type="email"
                        label="Email"
                        placeholder="example@example.com"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        icon={<EmailIcon />}

                    />

                    <TextInputLayout
                        className={classes.card_input}
                        type="password"
                        label="Password"
                        placeholder="P$ssword1"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        icon={<PasswordIcon/>}
                    />
                    <Button
                        className={classes.forgot_password_button}
                        onClick={this.onClickRegister}>forgot password</Button>
                    <div>
                        <Button

                            onClick={this.onClickRegister}>Register</Button>
                        <Button

                            onClick={this.onClickLogin} >Login</Button>
                    </div>
                </div>

            </div>
        )
    }
})