import React, { Component } from 'react';


class FeedProfileBar extends Component {
    render() {
        return (
            <div className = "profileBar">
                <div className = "userProfile" href = "#">
                    <div className = "profile" /> 
                    <div className = "userInfo">
                        <p className = "userName">leeeeunz_</p>
                        <p className = "userPlace">Paris</p>
                    </div>
                </div>
                <img className = "dots" alt = "dots" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" />
            </div>
        )
    }
}

export default  FeedProfileBar;