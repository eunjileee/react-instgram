import React, { Component } from 'react'

class Rec extends Component {
    render() {
        return (
            <div className = "storyProfile" href = "#">
                <div className = "profile" /> 
                <div className = "recFlex">
                    <div className = "userInfo">
                        <p className = "userName">leeeeunz_</p>
                        <p className = "info">Instagram 신규가입</p>
                    </div>
                    <span className = "follow">팔로우</span>
                </div>
            </div>
        )
    }
}

export default Rec;