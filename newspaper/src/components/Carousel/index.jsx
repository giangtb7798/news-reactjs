import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Carousel,Col } from 'antd';
import blog from '../../data/blog.json';
import { useState } from 'react';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width: '100%'
};
const Slider = () => {
    return (
        <div >
            <Carousel autoplay >
                <div>
                <img style={contentStyle} src="https://englishtown.edu.vn/wp-content/uploads/2019/01/yeu-the-thao-ban-phai-biet-cach-goi-chung-bang-tieng-anh-nhu-the-nao-ch%C6%B0a.png" alt="thể thao" />
                </div>
                <div>
                <img style={contentStyle} src="https://static.tapchitaichinh.vn/images/upload/duongthanhhai/05082020/15-dia-diem-du-lich-hot-nhat-viet-nam.jpg" alt="Văn hoá" />
                </div>
                <div>
                <img style={contentStyle} src="https://cdn.baogiaothong.vn/upload/images/2019-4/profile_avatar_img/2019-11-18/tin-tuc-trong-ngay-hom-nay-1574061980-width1004height565.png" alt="tin tức" />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;