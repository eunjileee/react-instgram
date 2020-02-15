import React, { Component } from 'react';


class Comment extends Component {
    render() {
        return (
            <React.Fragment>
                <div className = "commentBar">
                    <div className = "userId">dmswl</div>
                    <div className = "comments"> 유럽여행 가고싶다</div>
                    <div className = "more">더 보기</div>
                </div>
                <div className = "time">42분 전</div>
                <form className = "commentBox">
                    <input type ="text" className = "writeComment" placeholder = "댓글 달기..."/>
                    <button className = "uploadBtn">게시</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Comment;