import React from 'react';
import './Main.css';
import Gnb from '../components/Gnb';
import Feeds from '../components/Feeds';
// import Like from '../components/Like';
// import Comment from '../components/Comment';
// import FeedProfileBar from '../components/FeedProfileBar';
// import FeedIconBar from '../components/FeedIconBar';
// import FeedImage from '../components/FeedImage';
import UserProfile from '../components/UserProfile';
import MainFooter from '../components/MainFooter';
import Story from '../components/Story';
import Rec from '../components/Rec';
import RecBar from '../components/RecBar';
import StoryBar from '../components/StoryBar';



class Main extends React.Component {

    render() {
        return (
            <div> 
                <Gnb />
                <div className = "main">
                    <div className = "feeds">
                        <Feeds />
                        <Feeds />
                    </div>
                    <aside>  
                        <UserProfile />
                        <div className = "story">
                                <StoryBar />
                                <div className = "stories">
                                <Story />
                                <Story />
                                <Story />
                                <Story />
                                <Story />
                                </div>
                        </div>
                        <div className = "recommend">
                            <RecBar />
                            <Rec />
                            <Rec />
                            <Rec />
                        </div>
                        <MainFooter />
                    </aside>
                </div>
        </div>
        )
    }
}


export default Main;