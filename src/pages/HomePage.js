import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react'

function HomePage() {
const { Header, Content, Footer } = Layout;
    return (
        <div>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
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
