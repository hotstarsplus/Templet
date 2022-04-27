import React from "react";
import { Game } from "../jingziqi/Game";

export class ShowView extends React.Component<any, any>{
    public render() {
        return (
            <div style={{ height: "2000px", backgroundColor: "#838383" }}>
                <Game />
            </div>
        );
    }
}