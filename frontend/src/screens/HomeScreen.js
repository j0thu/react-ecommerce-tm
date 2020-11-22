import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async()=>{
            const res = await axios.get('/api/products'); /*res has an object data attached to it, access it by {data} or res.data*/
            setProducts(res.data);
        }
        fetchProducts();
    }, []);
    
    return <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product=>(
                    <Col key = {product._id} sm={12} md = {6} lg={4} xlg = {3}>
                        <Product product = {product} />
                    </Col>
                ))}
            </Row>
        </>
}

export default HomeScreen;
