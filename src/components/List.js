import React, { Component } from 'react';

class List extends Component{
    render() {
        return (
            <React.Fragment>
                <span>{this.props.comment.user}</span>
                <span>{this.props.comment.comment}</span>
            </React.Fragment>
        )
    }
}

export default List;