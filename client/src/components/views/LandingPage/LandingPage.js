import React, {useEffect, useState} from 'react'
import {FaCode} from "react-icons/fa";
import axios from "axios";
import {Icon, Col, Card, Row, Button, Carousel} from 'antd';
import Meta from "antd/lib/card/Meta";
import ImageSlider from "../../utils/ImageSlider";
import CheckBox from "./Sections/CheckBox";
import  { continents} from "./Datas";

function LandingPage() {
    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState(8)
    const [Filters, setFilters] = useState({
        continents: [],
        price: []
        }
    )

    useEffect(() => {
        let body = {
            skip: Skip,
            limit: Limit
        }
        getProducts(body)
    }, [])

    const getProducts = (body) => {
        axios.post("/api/product/products", body)
            .then(response => {
                if (response.data.success) {
                    if(body.loadMore) {
                        setProducts([...Products, ...response.data.productInfo])
                    } else {
                        setProducts(response.data.productInfo);
                    }
                    setPostSize(response.data.postSize);
                } else {
                    alert("상품들을 가져오는데 실패했습니다.")
                }
            })
    }

    const loadMoreHandler = () => {
        let skip = Skip + Limit;  // 0 + 8  , 8 + 8
        let body = {
            skip : skip,
            limit : Limit,
            loadMore : true
        }
        getProducts(body)
        setSkip(skip);
    }

    const renderCards = Products.map((product, index) => {
        console.log(product);
        return <Col lg={6} md={8} xs={24} key={index}>
            <Card
                cover={<ImageSlider images={product.images} />}
            >
                <Meta
                    title={product.title}
                    description={`$${product.price}`}
                />
            </Card>
        </Col>
    })

    const showFilterResults = (filters) => {

    }

    const handleFilters = (filters, category) => {
        const newFilters = { ...Filters}

        newFilters[category] = filters

        showFilterResults(filters);
    }
    return (
        <div style={{width: '75%', margin: '3rem auto'}}>
            <div style={{textAlign: 'center'}}>
                <h2>Let's Travel Anywhere<Icon type="rocket"></Icon></h2>
            </div>
            { /* Filter*/}

            {/* Checkbox*/}
            <CheckBox list={continents} handleFilters={filter => handleFilters(filter, "continents")}>

            </CheckBox>
            {/* RadioBox*/}
            
            { /* Search */}
            <Row gutter={[16,16]}>
                {renderCards}
            </Row>
            <br />

            {PostSize >= Limit &&
            <div style={{justifyContent: 'center'}}>
                <Button onClick={loadMoreHandler}>더보기</Button>
            </div>
            }
        </div>
    )
}

export default LandingPage
