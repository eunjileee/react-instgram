import React from 'react';
import './Main.css';
import Gnb from '../components/Gnb';
import Like from '../components/Like';
import Comment from '../components/Comment';
import FeedProfileBar from '../components/FeedProfileBar';
import FeedIconBar from '../components/FeedIconBar';
import FeedImage from '../components/FeedImage';
import UserProfile from '../components/UserProfile';
import MainFooter from '../components/MainFooter';




class Main extends React.Component {

    render() {
        return (//<Main />
            <div> 
                <Gnb />
                <div className = "main">
                    <article className = "feeds"> 
                        <FeedProfileBar />
                        <FeedImage />
                        <FeedIconBar />
                        <Like />
                        <Comment />
                    </article>


                    <aside>  
                        <UserProfile />
                        <div className = "story">
                            <div className = "storyBar">
                                <span className = "storyTitle">스토리</span>
                                <span className = "all">모두 보기</span>
                            </div>
                        </div>
                
                        <div className = "recommend">
                            <div className = "storyBar">
                                <span className = "storyTitle">스토리</span>
                                <span className = "all">모두 보기</span>
                            </div>

                        </div>

                        <MainFooter />
                    </aside>



                </div>
        </div>
        )
    }
}


export default Main;