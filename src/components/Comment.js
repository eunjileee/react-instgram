import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            value: '',
            comment: [{
                id: 0,
                user: '',
                comment: '',
            }]
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault(); // 새로고침 방지
        this.setState({
            value: '',
            comment: [...this.state.comment, {
                user: 'eunji',
                comment: this.state.value,
            }]
        })
    }

    // Delete = (e) => {
    //     console.log('clicked')
    //     e.preventDefault(); // 새로고침 방지
    //     this.setState({
    //         comment: []
    //     })
    // }

    onChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }


    render() {
        const comments = this.state.comment.map(reply => (
            <div className = "reply">
                <span className = "userId">{reply.user}</span>
                <span className = "comments" >{reply.comment}</span>
            </div>
        ))
        return (
            
            <React.Fragment>
                <div className = "commentBar">
                    <span className = "userId">leeeeunz_</span>
                    <span className = "comments" >유럽여행 가고싶어요... </span>
                    <div className = "more">더 보기</div>
                </div>
                <span className = "reply">
                    <div>{comments}</div>
                </span>
                <div className = "time">42분 전</div>
                <form className = "commentBox" onSubmit = {this.onSubmitForm}>
                    <input type ="text" value = {this.state.value} onChange = {this.onChange.bind(this)} className = "writeComment" placeholder = "댓글 달기..."/>
                    <button style = {{ opacity: this.state.value.length > 0 ? '1' : '0.5' }} onChange = {this.onSubmitForm.bind(this)} className = "uploadBtn">게시</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Comment;