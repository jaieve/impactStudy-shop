import React, {useState} from 'react';
import {Typography, Button, Form, Input} from "antd";
//vscode에서는 rfc 이지만, webstorm에서는 rsf이다.
// rcc 는 똑같이 rcc


const {Title} = Typography;
const {TextArea} = Input
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
    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{ textAlign : 'center', marginBottom: '2rem'}}>
                <h2> 여행 상품 업로드</h2>
            </div>
            <Form>
                {/*drop zoen */}
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
                <select>
                    <option></option>
                </select>
                <br/>
                <br/>
                <Button>확인</Button>
            </Form>
        </div>
    );
}

export default UploadProductPage;