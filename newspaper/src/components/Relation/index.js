import React, {useState, useMemo,useEffect}from 'react';
import 'antd/dist/antd.css';
import { Card, Col, Row, Image} from 'antd';
import Pagination from '../Pagination';
import blog from '../../data/blog.json'
import './Style.scss';
import { NavLink } from 'react-router-dom';
import { Typography } from 'antd';
import objectRandom from 'object-random';
const { Title } = Typography;
const Relation = (props) => {
    const [post, setPost] = useState({
        id: "" ,
        blogCategory: "" ,
        blogTitle : "" ,
        postedOn: "" ,
        author: "" ,
        blogImage: "" ,
        blogText: ""
    });
    const [relate, setRelate] = useState();
    const [plug, setSlug] = useState('');
    useEffect(() => {
        const plug = props.match.params.plug;
        const post = blog.find(post => post.plug == plug);
        const relate = blog.filter(i => i.blogCategory == post.blogCategory);
        const show = objectRandom(relate,{count: 3})
        console.log(show);
        setRelate(show);
        setPost(post);
        setSlug(plug)
    }, [post, props.match.params.plug]);
    return (
        <div>
            <div className="site-card-wrapper">
            <Title level={3}>Tin Liên Quan</Title>
                <Row gutter={16}>
                    {typeof relate !== "undefined" && relate.slice(0,3).map(i =>(
                <Col span={8} >  
                    <Card title={<NavLink to={`/post/${i.plug}`}>{i.blogTitle}</NavLink>} bordered={false}>
                    <Image width = "100" height = "200px" src={i.blogImage} alt="Post Image" />
                    </Card>
                </Col>
                ))}
                </Row>
            </div>
        </div>
    );
};

export default Relation;