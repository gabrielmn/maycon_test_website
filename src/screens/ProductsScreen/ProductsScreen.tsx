import React, { Component } from "react";
import Button from '../../components/Button/Button';
import FileInputLayout from "../../components/FileInputLayout/FileInputLayout";
import TextInputLayout from "../../components/TextInputLayout/TextInputLayout";
import Text from "../../components/Text/Text";
import classes from './ProductsScreen.module.css'

interface Props {

}

interface State {
    open: boolean,
    categoryId: number | undefined
    name: string | undefined
    file: any,

}

export default class ProductsScreen extends Component<Props, State> {

    constructor(props: Props | Readonly<Props>) {
        super(props);

        this.state = {
            open: false,
            categoryId: undefined,
            name: undefined,
            file: null,
        }

        this.onClickAdd = this.onClickAdd.bind(this);
        this.onChangeCategoryId = this.onChangeCategoryId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);

    }


    onClickAdd(): void {
        this.setState((currentState) => {
            return {
                open: true
            }
        })
    }

    onChangeCategoryId(event: any): void {
        this.setState((current) => {
            return {
                categoryId: event.target.value
            }
        })
    }

    onChangeName(event: any): void {
        this.setState((current) => {
            return {
                name: event.target.value
            }
        })
    }

    onChangeFile(event: any): void {
        this.setState((current) => {
            return {
                file: event.target.value
            }
        })
    }

    onCancelClick() {
        this.setState((current) => {
            return {
                open: false,
                categoryId: -1,
                name: '',
                file: null
            }
        })
    }

    render(): React.ReactNode {
        return (
            <div className={classes.container}>
                <div className={classes.card}>
                    <Text className={classes.card_header}>New Product</Text>
                    <TextInputLayout
                        className={classes.card_input}
                        label="Category Id"
                        placeholder="category id"
                        type="number"
                        value={this.state.categoryId}
                        onChange={this.onChangeCategoryId}
                    />
                    <TextInputLayout
                        className={classes.card_input}
                        label="Name"
                        placeholder="name"
                        type="string"
                        onChange={this.onChangeName}
                        value={this.state.name} />
                    <FileInputLayout 
                        label="Upload image"
                        className={classes.card_input} />
                    <div className={classes.button_container}>
                        <Button onClick={() => { }}>Cancel</Button>
                        <Button onClick={() => { }}>Confirm</Button>
                    </div>
                </div>
            </div>
        )
    }
}