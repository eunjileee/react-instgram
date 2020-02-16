import React, { Component } from 'react'

class StoryBar extends Component {
    render() {
        return (
            <div className = "storyBar">
                <span className = "storyTitle">스토리</span>
                <span className = "all">모두 보기</span>
            </div>
        )
    }
}

export default StoryBar;