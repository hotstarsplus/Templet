import React from "react";
import './ui.css'

interface ImgCardInterface{
    imgurl:string;
    imgtitle:string;
    imgdes1?:string;
    imgdes2?:string;
}

export class RightImgCard extends React.Component<ImgCardInterface, any>{
    constructor(props:ImgCardInterface){
        super(props);
    }

    public render() {
        return (
            <div className="imgcardfather1">
                <div className="imgDiv1">
                    < img alt="example" src={this.props.imgurl} />
                </div>
                <div className="imgdes1" >{this.props.imgtitle}<br/>
                    <hr/>
                    {this.props.imgdes1}<br/>
                    {this.props.imgdes2}
                </div>
            </div>

        );
    }
}
