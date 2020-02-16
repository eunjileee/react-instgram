import React, { Component } from 'react'

class RecBar extends Component {
    render() {
        return (
            <div className = "storyBar">
                <span className = "storyTitle">회원님을 위한 추천</span>
                <span className = "all">모두 보기</span>
            </div>
        )
    }
}

export default RecBar;