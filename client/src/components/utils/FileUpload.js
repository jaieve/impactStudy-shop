import React from 'react';
import Dropzone from "react-dropzone";
import {Icon} from "antd";
import axios from "axios";

function FileUpload(props) {
    const style = [
        {display: 'flex', justifyContent: 'space-between'},
        {width: 300, height: 240, border : '1px solid lightgray',
        display: 'flex', alignItems: 'center', justifyContent: 'center'}
    ]

    const dropHandler = (files) => {
        let formData = new FormData();
        const config = {
            header : {'content-type':'multipart/form-data'}
        }
        formData.append('file', files[0])
        axios.post('/api/product/image', formData, config)
            .then(response => {
                if(response.data.success){

                } else {
                    alert('파일을 저장하는데 실패했습니다.');
                }
            })
    }
    return (
        <div style={style[0]}>
            <Dropzone onDrop={dropHandler}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div style={style[1]}
                            {...getRootProps()}>
                            <input {...getInputProps()} />
                            <Icon type="plus" style={{fontSize :'3rem'}} />
                        </div>
                    </section>
                )}
            </Dropzone>
        </div>
    );
}

export default FileUpload;