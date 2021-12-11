import React, { Component } from "react";
import Button from '../../components/Button/Button';
import FileInputLayout from "../../components/FileInputLayout/FileInputLayout";
import TextInputLayout from "../../components/TextInputLayout/TextInputLayout";
import Text from '../../components/Text/Text';
import classes from './CategoriesScreen.module.css'
import { registerCategory } from '../../api/productAPI';

interface Props {

}

interface State {
    name: string,
    file: string,

}

export default class ProductsScreen extends Component<Props, State> {

    constructor(props: Props | Readonly<Props>) {
        super(props);

        this.state = {
            name: '',
            file: '',
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);

    }


    onChangeName(event: any): void {
        this.setState((current) => {
            return {
                name: event.target.value
            }
        })
    }

    onChangeFile(data: any): void {
        this.setState((current) => {
            return {
                file: data
            }
        })
    }

    onCancelClick() {
        this.setState((current) => {
            return {
                name: '',
                file: ''
            }
        })
    }

    async onConfirmClick(): Promise<void> {
        const result = await registerCategory(this.state.name, this.state.file);
        if (result.status === 201) {
            alert("Inserted.")
            this.setState((current) => {
                return {
                    name: '',
                    file: ''
                }
            })  
        }else{
            alert("Not inserted.")
        }

    }

    render(): React.ReactNode {
        return (
            <div className={classes.container}>
                <div className={classes.card}>
                    <Text className={classes.card_header}>New Category</Text>
                    <TextInputLayout
                        className={classes.card_input}
                        label="Name"
                        placeholder="name"
                        type="string"
                        value={this.state.name}
                        onChange={this.onChangeName}
                    />
                    <FileInputLayout
                        onChange={this.onChangeFile}
                        className={classes.card_input}
                        label="Upload image" />
                    <div className={classes.button_container}>
                        <Button onClick={this.onCancelClick}>Cancel</Button>
                        <Button onClick={this.onConfirmClick}>Confirm</Button>
                    </div>
                </div>
            </div>
        )
    }
}