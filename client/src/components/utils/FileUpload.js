import React, {useState} from 'react';
import Dropzone from "react-dropzone";
import {Icon} from "antd";
import axios from "axios";

function FileUpload(props) {
    const style = [
        {display: 'flex', justifyContent: 'space-between'},
        {
            width: 300, height: 240, border: '1px solid lightgray',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }
    ]

    const [Images, setImages] = useState([]);

    const dropHandler = (files) => {
        let formData = new FormData();
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append('file', files[0])
        axios.post('/api/product/image', formData, config)
            .then(response => {
                if (response.data.success) {
                    setImages([...Images, response.data.filePath])
                } else {
                    alert('파일을 저장하는데 실패했습니다.');
                }
            })
    }
    return (
        <div style={style[0]}>
            <Dropzone onDrop={dropHandler}>
                {({getRootProps, getInputProps}) => (
                    <div style={style[1]}
                         {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Icon type="plus" style={{fontSize: '3rem'}}/>
                    </div>
                )}
            </Dropzone>
            <div style={{ display : 'flex', width: '350px', height: '240px', overflowX: 'scroll'}>
            {Images.map((image, index) => {
                    <div key={index}>
                        <img style={{minWidth : '300px', }}></img>
                    </div>
            })}
            </div>
        </div>
    );
}

export default FileUpload;