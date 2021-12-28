import React, {useState} from 'react';
import {Typography, Button, Form, Input} from "antd";
import FileUpload from "../../utils/FileUpload";
//vscode에서는 rfc 이지만, webstorm에서는 rsf이다.
// rcc 는 똑같이 rcc
const {Title} = Typography;
const {TextArea} = Input;

const Continents = [
    {key : 1, value: 'Africa'},
    {key : 2, value: 'Europe'},
    {key : 3, value: 'Asia'},
    {key : 4, value: 'North America'},
    {key : 5, value: 'South America'},
    {key : 6, value: 'Australia'},
    {key : 7, value: 'Antarctica'},
]

function UploadProductPage() {
    const [Title, setTitle ] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Continent, setContinent] = useState(1)
    const [image, setImages] = useState([])

    const handleTitleChange = (e) => {
        setTitle(e.currentTarget.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.currentTarget.value);
    }
    const handleNumberChange = (e) => {
        setPrice(e.currentTarget.value);
    }
    const handleContinentChange= (e) => {
        setContinent(e.currentTarget.value);
    }
    const updateImages = (newImages) => {
        setImages(newImages)
    }
    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{ textAlign : 'center', marginBottom: '2rem'}}>
                <h2>Upload Travel Product</h2>
            </div>
            <Form>
                <FileUpload refreshFunction={updateImages}/>
                <br/>
                <br/>
                <label>이름</label>
                <Input onChange={handleTitleChange} value={Title}/>
                <br/>
                <br/>
                <label>설명</label>
                <TextArea onChange={handleDescriptionChange} value={Description}/>
                <br/>
                <br/>
                <label>가격($)</label>
                <Input type="number" onChange={handleNumberChange} value={Price}/>
                <br/>
                <br/>
                <select onChange={handleContinentChange} value={Continent}>
                    {Continents.map( item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                        ))}
                </select>
                <br/>
                <br/>
                <Button>확인</Button>
            </Form>
        </div>
    );
}

export default UploadProductPage;