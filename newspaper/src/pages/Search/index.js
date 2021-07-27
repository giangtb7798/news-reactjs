import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Input, Space,List } from 'antd';
import blog from '../../data/blog.json'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const { Search } = Input;

const SearchR = () => {
    const [data, setData] = useState();
    const onSearch = (value) => {
        const valueSearch = value;
        const show = blog.filter(x => x.blogTitle.toLocaleLowerCase().includes(valueSearch.toLowerCase()));
        setData(show);
    }
const listData = data;
    return (
        <div>
            <div className = "search-cont">
            <Space direction="vertical">
                <Search 
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                />
            </Space>
            </div>
        <div className = "list">
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
                }}
                dataSource={listData}
                renderItem={item => (
                <List.Item
                    key={item.blogTitle}
                    extra={
                    <img
                        width={272}
                        alt="logo"
                        src={item.blogImage}
                    />
                    }
                >
                <List.Item.Meta
                    title={<NavLink to={`/post/${item.plug}`}>{item.blogTitle}</NavLink>}
                    />
                    {item.description}
                </List.Item>
                )}
            />
        </div>
        </div>
    );
};

export default SearchR;