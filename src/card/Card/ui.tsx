import React from "react";
import $ from "jquery";
import "../../App.css";

/**
 * 主页面卡片，动画浮动
 */

export class CardMoveUPDown extends React.Component {

    public componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
/**
 * 窗口滑动像素等于150时，执行函数，更改样式
 */
    handleScroll = (e: any) => {
        if (window.pageYOffset >= 150) {
            $("#moveDiv").addClass("moveupdiv");
            $("#moveDiv").removeClass("movedowndiv");
        } else {
            if ($("#moveDiv").hasClass("moveupdiv")) {
                $("#moveDiv").removeClass("moveupdiv");
                $("#moveDiv").addClass("movedowndiv");
            }

        }
    }
    /**
     * render
     */
    public render() {
        return (
            <div className="moveStaticDiv" id="moveDiv" >
                <p>科技改变生活，智慧决定未来</p>
                <h1>杀死我们的是<span style={{color:"red"}}>听天由命</span>和<span style={{color:"red"}}>漫不经心</span></h1>
            </div>
        );
    }
}