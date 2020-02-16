import React, { Component } from 'react';
import paris from '../paris.JPG';


class FeedImage extends Component {
    render() {
        return (
            <React.Fragment>
                <img className = "feedImg" alt = "feed" src = {paris} />
            </React.Fragment>
        )
    }
}

export default FeedImage;