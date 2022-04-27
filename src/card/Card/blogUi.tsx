import React from "react";
import $ from "jquery";
import "../../App.css";

/**
 * blog卡片，动画浮动
 */

export class CardBlog extends React.Component {

    public componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
/**
 * 窗口滑动像素等于150时，执行函数，更改样式
 */
    handleScroll = (e: any) => {
        if (window.pageYOffset >= 140) {
            $("#moveDiv").addClass("moveupblogdiv");
        } else {
           
        }
    }
    /**
     * render
     */
    public render() {
        return (
            <div className="blogStaticDiv" id="moveDiv" >
                <p>科技改变生活，智慧决定未来</p>
                <h1>杀死我们的是<span style={{color:"red"}}>听天由命</span>和<span style={{color:"red"}}>漫不经心</span></h1>
            </div>
        );
    }
}