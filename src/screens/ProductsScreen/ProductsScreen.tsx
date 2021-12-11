import React, { Component } from "react";
import Button from '../../components/Button/Button';
import FileInputLayout from "../../components/FileInputLayout/FileInputLayout";
import TextInputLayout from "../../components/TextInputLayout/TextInputLayout";
import Text from "../../components/Text/Text";
import classes from './ProductsScreen.module.css'
import { registerProduct } from '../../api/productAPI';

interface Props {

}

interface State {
    categoryId: string
    name: string
    file: string,

}

export default class ProductsScreen extends Component<Props, State> {

    constructor(props: Props | Readonly<Props>) {
        super(props);

        this.state = {
            categoryId: '',
            name: '',
            file: '',
        }

        this.onChangeCategoryId = this.onChangeCategoryId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);

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
                categoryId: '',
                name: '',
                file: ''
            }
        })
    }

    async onConfirmClick(){
        const result = await registerProduct(this.state.categoryId, this.state.name, this.state.file)
        if(result.status === 201){
            alert("Inserted.")
            this.setState((current) => {
                return {
                    categoryId: '',
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
                    <Text className={classes.card_header}>New Product</Text>
                    <TextInputLayout
                        className={classes.card_input}
                        label="Category Id"
                        placeholder="category id"
                        type="string"
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
                        onChange={this.onChangeFile}
                        label="Upload image"
                        className={classes.card_input} />
                    <div className={classes.button_container}>
                        <Button onClick={this.onCancelClick}>Cancel</Button>
                        <Button onClick={this.onConfirmClick}>Confirm</Button>
                    </div>
                </div>
            </div>
        )
    }
}