import React from "react";
import "./jingzi.css";

interface SquareInterFace{
    value:any;
    onClick: () => void;
}
export class Square extends React.Component<SquareInterFace,any>{

    constructor(props:SquareInterFace){
        super(props);
    }
    
    public render(){
        return(
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}