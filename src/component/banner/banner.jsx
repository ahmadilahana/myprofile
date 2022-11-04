import React from 'react';
import Button from '../button/button';
import "./banner.css"

const BannerComponent = (props) => {
    return ( 
        <div className="bannerMain d-flex">
            <div className="bannerImage">
                <img src={require("../../assets/img/" + props.imgProfile)} width="100%" height="100%"/>
            </div>
            <div className="bannerContent d-flex d-flex-column alignItemsCenter justifyContentsCenter">
                <div className='bannerBody'>
                    <p className='textItalic fontTimesNewRoman' style={{
                        fontSize: "20px",
                        fontWeight: "initial"
                    }}>
                        "{props.description}"
                    </p>
                    <p className='col-12 textAlignRight'style={{
                        fontSize: "20px",
                        fontWeight: "bold"
                    }}>
                        {props.userName}
                    </p>

                </div>
                <Button />
            </div>
        </div>
     );
}
 
export default BannerComponent;