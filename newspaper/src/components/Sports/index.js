import React, {useState, useMemo}from 'react';
import 'antd/dist/antd.css';
import { Card, Col, Row, Image} from 'antd';
import Pagination from '../Pagination';
import blog from '../../data/blog.json'
import './Style.scss';
import { NavLink } from 'react-router-dom';
import { Typography } from 'antd';
const { Title } = Typography;
let PageSize = 3;
const Sport = () => {
    const content = blog.filter(i => i.blogCategory == "Sport");
    content.sort(function (a, b) {
        return  b.postedOn - a.postedOn;
    });
    
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return content.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
    return (
        <div>
            <div className="site-card-wrapper">
            <Title level={3}>Thể Thao</Title>
                <Row gutter={16}>
                    {currentTableData.map(i =>(
                <Col span={8} >  
                    <Card title={<NavLink to={`/post/${i.plug}`}>{i.blogTitle}</NavLink>} bordered={false}>
                    <Image width = "100" height = "200px" src={i.blogImage} alt="Post Image" />
                    </Card>
                </Col>
                ))}
                </Row>
                <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={content.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
            </div>
        </div>
    );
};

export default Sport;