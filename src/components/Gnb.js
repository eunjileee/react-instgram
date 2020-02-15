import React, { Component } from 'react';
import logo from '../logo_text.png';


class Gnb extends Component {
    render() {
        return (
            <nav>
                <div className = "navContainer"> 
                    <a href = "https://www.instagram.com/" className = "logo">
                        <img className = "logo_img" alt = "icon" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" />
                        <div className = "line"></div>
                        <img className = "logo_text" src = {logo} alt = "text-logo" />
                    </a>
                <div className = "searchBar">
                    <span className = "search">검색</span>
                </div>
                <div className = "nav_icons">
                    <img className = "item1" alt = "둘러보기" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
                    <img className = "item2" alt = "좋아요" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                    <img className = "item3" alt = "유저" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
                </div>
                </div>
            </nav>
        )
    }

}

export default Gnb;
