import { Spin } from "antd";
import React from "react";

export class GithubView extends React.Component<any,any>{
    public render(){
        window.location.href = "https://github.com/hotstarsplus";
        return(
            <div style={{width:"1920px",height:"1080px",lineHeight:"1080px", textAlign:"center"}}>
            <Spin tip="加载跳转中" size="large"/>
            </div>
        );
    }
}