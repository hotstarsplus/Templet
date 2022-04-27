import { BackTop, Layout, message } from "antd";
import React from "react";
import IndexNav from "../indexNav/ui";
import { TopImgView } from "../topImg/ui";
import "../App.css";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import { CardMoveUPDown } from "../card/Card/ui";
import { LeftImgCard } from "../imgCard/leftui";
import { RightImgCard } from "../imgCard/rightui";
export class IndexCVView extends React.Component<any, any>{

    public render() {
        return (
            <div style={{ height: "2000px", backgroundColor: "white" }}>
                <IndexNav />
                <TopImgView />
                <BackTop duration={1000}>
                    <div className="upStyle"><VerticalAlignTopOutlined style={{ fontSize: "20px" }} /></div>
                </BackTop>
                <CardMoveUPDown />
                <div>
                    <LeftImgCard
                        imgurl={require("../img/1.jpg")}
                        imgtitle="北极星、北辰、紫薇、勾陈一"
                        imgdes1="天空北部的一颗亮星，距天球北极很近，差不多正对着地轴。"
                        imgdes2="从地球上看，它的位置几乎不变，可以靠它来辨别方向。" />
                </div>
                <div style={{ float: "right", overflow: "hidden",marginTop:"20px" }}>
                    <RightImgCard
                        imgurl={require("../img/2.jpg")}
                        imgtitle="枫叶"
                        imgdes1="红色的枫叶真好看" />
                </div>
                <div style={{ clear: "both" }}></div>
                <div style={{ marginTop:"20px" }}>
                    <LeftImgCard
                        imgurl={require("../img/3.jpg")}
                        imgtitle="千树万树梨花开 ——岑参"
                        imgdes1="那盛开的梨花,一簇簇绽满枝头,玲珑、纤丽,如云似雪。"
                        imgdes2="下了一夜的雪，把思念涂抹出涂抹出纯洁颜色。" />
                </div>
            </div>
        );
    }
}