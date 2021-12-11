import React, { Component } from "react";
import Button from '../../components/Button/Button';
import TextInputLayout from '../../components/TextInputLayout/TextInputLayout';
import { ReactComponent as UsernameIcon } from '../../assets/icons/person_black_48dp.svg';
import { ReactComponent as PasswordIcon } from '../../assets/icons/lock_black_48dp.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { login } from '../../api/userAPI';

import classes from './LoginScreen.module.css';

interface Props extends RouteComponentProps {

}

interface State {
    username: string,
    password: string
}

export default withRouter(class LoginScreen extends Component<Props, State>{

    constructor(props: Props | Readonly<Props>) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onClickRegister = this.onClickRegister.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
        this.onClickForgotPassword = this.onClickForgotPassword.bind(this);
    }

    onChangeUsername(event: any): void {
        this.setState((current) => {
            return {
                username: event.target.value
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

    async onClickLogin(): Promise<void> {
        const result = await login(this.state.username, this.state.password);
        if(result.status === 200){
            this.props.history.push('/panel')
        }else{
            alert(`Error:${result.status}`)
        }
        
        
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
                        type="string"
                        label="Username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        icon={<UsernameIcon />}

                    />

                    <TextInputLayout
                        className={classes.card_input}
                        type="password"
                        label="Password"
                        placeholder="P$ssword1"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        icon={<PasswordIcon />}
                    />
                    <Button
                        className={classes.forgot_password_button}
                        onClick={this.onClickRegister}>forgot password</Button>
                    <div className={classes.button_container}>
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