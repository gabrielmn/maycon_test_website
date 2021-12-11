import React, { Component } from 'react';
import Button from '../Button/Button';

import { ReactComponent as UploadFileIcon } from '../../assets/icons/upload_file_black_48dp.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit_black_48dp.svg';

import classes from './FileInputLayout.module.css'

interface Props {
    label: string,
    className?: string
    
}

interface State {
    preview: boolean,
    file: any
}

export default class FileInputLayout extends Component<Props, State>{

    inputRef: React.RefObject<HTMLInputElement>;

    constructor(props: Props | Readonly<Props>) {
        super(props);

        this.state = {
            preview: false,
            file: null
        }

        this.inputRef = React.createRef();
        this.uploadFile = this.uploadFile.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    uploadFile() {
        this.inputRef.current!.click();
    }

    onChange(event: any) {
        this.setState((currentSate) => {
            return {
                preview: true,
                file: event.target.files[0]
            }
        })
        console.log(event.target.files[0])
    }

    render() {

        return (

            <div className={[classes.container, this.props.className].join(" ")}>
                <input
                    ref={this.inputRef}
                    type="file"
                    name="myImage"
                    onChange={this.onChange}
                    hidden={true}
                />
                {
                    (!this.state.preview) ?
                        <Button
                            className={classes.upload_button}
                            onClick={this.uploadFile}
                        >
                            <UploadFileIcon />
                            {this.props.label}
                        </Button>
                        :
                        <div className={classes.image_container} >
                            <img
                                className={classes.image_container_image}
                                src={URL.createObjectURL(this.state.file)} />
                            <Button
                                className={classes.image_container_edit_button}
                                onClick={this.uploadFile}
                            ><EditIcon /></Button>
                        </div>

                }

            </div>

        )
    }

}