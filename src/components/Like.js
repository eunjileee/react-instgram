import React, { Component } from 'react';


class Like extends Component {
    render() {
        return (
            <div className = "likeBar">
                <div className = "likeUserProfile" />
                <div className = "likeComment">
                    <b>leeeeunz_</b>님 <b>외 10명</b>이 좋아합니다
                </div>
            </div>
        )
    }
}

export default Like;