import React from 'react';
import './ui.css';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import $ from "jquery";
//引入导航栏相对应的组件


const { Content } = Layout;

/**
 * 顶部导航栏
 */
class IndexNav extends React.Component {
    //在componentDidMount生命周期中添加window的handleScroll滑动监听事件
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    //定义handleScroll事件函数
    handleScroll = (e: any) => {
        if (window.pageYOffset >= 80) {  
            $('#header').addClass('header_bg');
        } else {
            $('#header').removeClass('header_bg'); 
        }
    }

    render() {
        return (
                <Layout>
                    <div className="header" id="header"> 
                        <div className='brand' id="logo">
                            My WebSite
                            {/* <Link to="/">
                                <img src={require("./img/dkgw_logo@01.png")} alt="大可logo" width="" height="32" />
                            </Link> */}
                        </div>
                        <div className="nav">
                            <ul>
                                <li>
                                    <Link to="/index">
                                        
                                        {/* <img src={require("./img/dkgw_hxjs.png")} alt="核心技术" width="32" height="32" /> */}
                                        HOME
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog">
                                        {/* <img src={require("./img/dkgw_hyal.png")} alt="行业案例" width="32" height="32" /> */}
                                        BLOG
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/github" target={"_blank"}>
                                        {/* <img src={require("./img/dkgw_gywm.png")} alt="关于DUCK" width="32" height="32" /> */}
                                        GitHub
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/show">
                                        {/* <img src={require("./img/dkgw_jrwm.png")} alt="加入我们" width="32" height="32" /> */}
                                        Show
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Layout>
        );
    }
}

export default IndexNav;