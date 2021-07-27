import React from 'react';
import { useState,useEffect } from 'react';
import blogPost from '../../data/blog.json';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import './index.css';
const Articles = (props) => {
        const [post, setPost] = useState({
            id: "" ,
            blogCategory: "" ,
            blogTitle : "" ,
            postedOn: "" ,
            author: "" ,
            blogImage: "" ,
            blogText: ""
        });
        const [plug, setSlug] = useState('');
        
        useEffect(() => {
            const plug = props.match.params.plug;
            const post = blogPost.find(post => post.plug == plug);
            setPost(post);
            setSlug(plug)
        }, [post, props.match.params.plug]);
    
        if(post.blogImage == "") return null;
    return (
        <div>
            <Card title={post.blogTitle} className = "title">
                {post.blogText}
            </Card>
            
        </div>
    );
};

export default Articles;