import React from 'react';
import 'antd/dist/antd.css';
import './Style.scss';
import { Layout, Menu, Image,} from 'antd';
import { NavLink } from 'react-router-dom';
import {
	HeartOutlined,
	HomeOutlined,
	FileOutlined,
	TeamOutlined,
	UserOutlined,
  } from '@ant-design/icons';
import loupe from '../../assets/icon/loupe.png';
import { SearchOutlined } from '@ant-design/icons';
const { Header } = Layout;
const { SubMenu } = Menu;
const HeaderT = () => {
	return (
		<div>
			<Layout className="layout">
				<Header>
					<div className="logo">
						<img
						width={50}
						src=""
						/>
					</div>
					<div className = "menu">
						<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
						<Menu.Item key="1" icon={<HomeOutlined />}>
							<NavLink to="/">Home</NavLink>
							</Menu.Item>
							<Menu.Item key="2" icon={<HeartOutlined />}>
							<NavLink to="/the-thao">Thể Thao</NavLink>
							</Menu.Item>
							<SubMenu key="sub1" icon={<UserOutlined />} title="User">
							<Menu.Item key="3">Tom</Menu.Item>
							<Menu.Item key="4">Bill</Menu.Item>
							<Menu.Item key="5">Alex</Menu.Item>
							</SubMenu>
							<SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
							<Menu.Item key="6">Team 1</Menu.Item>
							<Menu.Item key="8">Team 2</Menu.Item>
							</SubMenu>
							<Menu.Item key="9" icon={<FileOutlined />}>
							Files
							</Menu.Item>
							<Menu.Item key="10" icon={<SearchOutlined />}>
							<NavLink to="/search">Tìm kiếm</NavLink>
							</Menu.Item>							
						</Menu>
						<p>Đăng nhập</p>
					</div>
				</Header>
  			</Layout>
		</div>
	);
};

export default HeaderT;