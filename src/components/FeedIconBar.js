import React, { Component } from 'react'


class FeedIconBar extends Component {
    render() {
        return (
            <div className = "iconBar">
                <div className = "leftIc">
                    <img className = "icHeart" alt = "heart" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                    <img className = "icComment" alt = "comment" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" />
                    <img className = "icShare" alt = "share" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" />
                </div>
                <img className = "icBookmark" alt = "bookmark" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" />
            </div>
        )
    }
}

export default FeedIconBar;