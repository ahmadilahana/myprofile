import React, { Component } from 'react';
import BannerComponent from '../../component/banner/banner';
import NavHeader from '../../component/navHeader/navHeader';



class Home extends Component {
    state = {
        imgProfile: "profile.jpg",
        description: "Saya adalah web developer yang terus mengembangkan skill yang saya miliki.Siap membantu anda mebuat dan mengembangkan website anda.",
        userName: "Ahmat Arif Ilahana"
    }
    render(){
        return (
            <div>
                <NavHeader />
                <BannerComponent imgProfile={this.state.imgProfile} description={this.state.description} userName={this.state.userName}/>
            </div>
        )
    }
}

export default Home;