import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';

function HomePage() {
const { Header, Content, Footer } = Layout;
    return (
        <div>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item><Link to="/login">Login</Link></Menu.Item>
                        <Menu.Item><Link to="/register">Register</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{display:'flex',justifyContent:'center', padding: 24, minHeight: 380}}>
                        <h1>HOŞGELDİNİZ <span>{localStorage.getItem('email')}</span></h1>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Quantic App-2022</Footer>
            </Layout>
        </div>
    )
}

export default HomePage
