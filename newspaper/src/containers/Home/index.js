import React from 'react';
import HotNews from '../../components/HotNews';
import Slider from '../../components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col,Row } from 'antd';
import './home.css';
import Newest from '../../components/Newest';
import Sport from '../../components/Sports';
import News from '../../components/News';
const Home = () => {
    return (
        <div className = "home">
            <Row>
                <Col span={8}><Slider /></Col>
                <Col span={16}><HotNews /></Col>  
            </Row>
            <Newest />
            <Sport />
            <News />
        </div>
    );
};

export default Home;