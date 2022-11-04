import React from 'react';
import "./navHeader.css";

const NavHeader = () => {
    return (
        <div className="nav_header d-flex">
            <div className="nav_header_title col-6">
                <p className='m-0'>MyProfile</p>
            </div>
            <div className="nav_header_menu d-flex col-6">
                <div>
                    <p className='m-auto' style={{cursor: "pointer"}}>Home</p>
                </div>
                <div>
                    <p className='m-auto' style={{cursor: "pointer"}}>About</p>
                </div>
                <div>
                    <p className='m-auto' style={{cursor: "pointer"}}>Experience</p>
                </div>
                <div>
                    <p className='m-auto' style={{cursor: "pointer"}}>Skill</p>
                </div>
                <div>
                    <p className='m-auto' style={{cursor: "pointer"}}>Project</p>
                </div>
                <div>
                    <p className='m-auto' style={{cursor: "pointer"}}>Contact</p>
                </div>
            </div>
        </div>
    )
}

export default NavHeader;