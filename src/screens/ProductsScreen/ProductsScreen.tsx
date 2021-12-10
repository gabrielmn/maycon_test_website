import React, { Component } from "react";
import Button from '../../components/Button/Button';
import FileInputLayout from "../../components/FileInputLayout/FileInputLayout";
import TextInputLayout from "../../components/TextInputLayout/TextInputLayout";

import classes from './ProductsScreen.module.css'

interface Props {

}

interface State {
    open: boolean,
    categoryId: number,
    name: string,
    file: any,

}

export default class ProductsScreen extends Component<Props, State> {

    constructor(props: Props | Readonly<Props>) {
        super(props);

        this.state = {
            open: false,
            categoryId: -1,
            name: '',
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
                    <h1>New Product</h1>
                    <TextInputLayout
                        label="Category Id"                            
                        type="number"
                        value={this.state.categoryId} 
                        onChange={this.onChangeCategoryId} 
                    />
                    <TextInputLayout
                        label="Name" 
                        type="string" 
                        onChange={this.onChangeName} 
                        value={this.state.name}/>
                    <FileInputLayout/>
                    <div>
                        <Button onClick={()=>{}}>Cancel</Button>
                        <Button onClick={()=>{}}>Confirm</Button>
                    </div>
                </div>
            </div>
        )
    }
}