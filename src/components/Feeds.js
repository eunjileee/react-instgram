import React, { Component } from 'react'
import Like from './Like';
import Comment from './Comment';
import FeedProfileBar from './FeedProfileBar';
import FeedIconBar from './FeedIconBar';
import FeedImage from './FeedImage';


class Feeds extends Component {
    render() {
        return (
            <React.Fragment>
                <article className = "feeds"> 
                    <FeedProfileBar />
                    <FeedImage />
                    <FeedIconBar />
                    <Like />
                    <Comment />
                </article>
            </React.Fragment>
        )   
    }
}


export default Feeds;