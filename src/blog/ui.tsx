import QueueAnim from "rc-queue-anim";
import React from "react";
import { CardBlog } from "../card/Card/blogUi";
import { CardMoveUPDown } from "../card/Card/ui";
import IndexNav from "../indexNav/ui";
import { Game } from "../jingziqi/Game";
import '../App.css';
import './blogui.css';

export class BlogView extends React.Component<any, any>{
    public render() {
        return (
            <div style={{ height: "2000px", backgroundColor: "white" }}>
                <IndexNav />
                <div style={{ height: "80px", opacity: "0" }}>
                    占位
                </div>
                {/* <div className="fontwriteview">
                    <svg className="fontwriteviewsvg" viewBox="0 -70 450 250">
                        <symbol id="s-text">
                            <text text-anchor="middle" x="50%" y="35%" className="text--line" >Blog</text>
                        </symbol>
                        <g className="g-ants">
                            <use xlinkHref="#s-text" className="text-copy"></use>
                            <use xlinkHref="#s-text" className="text-copy"></use>
                            <use xlinkHref="#s-text" className="text-copy"></use>
                            <use xlinkHref="#s-text" className="text-copy"></use>
                            <use xlinkHref="#s-text" className="text-copy"></use>
                        </g>
                    </svg>
                </div> */}
                <div className="g-box">
                    <div className="g-flex">
                        <div className="g-item">0</div>
                        <div className="g-item">1</div>
                        <div className="g-item">2</div>
                    </div>
                </div>
            </div>
        );
    }
}