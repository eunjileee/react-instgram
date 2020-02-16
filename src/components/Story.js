import React, { Component } from 'react'

class Story extends Component {
    render() {
        return (
            <div className = "storyProfile" href = "#">
                <div className = "profile" /> 
                <div className = "userInfo">
                    <p className = "userName">leeeeunz_</p>
                    <p className = "userTime">9시간 전</p>
                </div>
            </div>
        )
    }
}

export default Story;