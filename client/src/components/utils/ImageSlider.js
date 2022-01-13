import React from 'react';
import {Col, Card, Row, Button, Carousel} from 'antd';
import Icon from '@ant-design/icons'

function ImageSlider(props) {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <div><Carousel autoplay>
            {props.images.map((image, index) => (
                <div key={index}>
                    <img style={{width:'100%', maxHeight:'150px'}}
                         src={`http://localhost:5000/${image}`}/>
                </div>
            ))}
        </Carousel></div>
    );
}

export default ImageSlider;