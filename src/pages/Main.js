import React from 'react';
import './Main.css';
import logo from '../logo_text.png';

class Main extends React.Component {
    // //this.state = {
    //     coments: [{
    //         name: 'wecode'
    //         text:''
    //     }]
    
    render() {
        return (//<Main />
            <div> 
                <nav>
                    <div className = "navContainer"> 
                        <a href = "https://www.instagram.com/" className = "logo">
                            <img className = "logo_img" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" />
                            <div className = "line"></div>
                            <img className = "logo_text" src = {logo} />
                        </a>
                    <div className = "searchBar">
                        <span className = "search">검색</span>
                    </div>
                    <div className = "nav_icons">
                        <img className = "item1" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
                        <img className = "item2" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                        <img className = "item3" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
                    </div>
                    </div>
                </nav>


           
                <div className = "main">
                    <article className = "feeds"> 
                        <div className = "profileBar">
                            <div className = "userProfile" href = "#">
                                <div className = "profile" /> 
                                <div className = "userInfo">
                                    <p className = "userName">wecode_bootcamp</p>
                                    <p className = "userPlace">WeCode - 위코드</p>
                                </div>
                            </div>
                            <img className = "dots" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" />
                        </div>
                        <div className = "feedImage" /> 
                        <div className = "iconBar">
                            <div className = "leftIc">
                                <img className = "icHeart" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                                <img className = "icComment" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" />
                                <img className = "icShare" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" />
                            </div>
                            <img className = "icBookmark" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" />
                        </div>
                        <div className = "likeBar">
                            <div className = "likeUserProfile" />
                            <div className = "likeComment">
                                <b>leeeeunz_</b>님 <b>외 10명</b>이 좋아합니다
                            </div>
                        </div>
                        <div className = "commentBar">
                            <div className = "userId">userId</div>
                            <div className = "comments"> commentdsfsfsgdgfdgdfgdsgfdgdsfgsfdgsdfgsdfgsd
                                <div className = "more">더 보기</div>
                            </div>
                        </div>
                        <div className = "time">42분 전</div>
                        <form className = "commentBox">
                            <textarea type ="text" className = "writeComment" placeholder = "댓글 달기..."/>
                            <button className = "uploadBtn">게시</button>
                        </form>
                    </article>


                    <aside>  
                        <div className = "userProfile">
                            <div className = "userImg" />
                            <div className = "aboutUser">
                                <span className = "user">leeeeunz_</span>
                                <span className = "name">EUNJI LEE</span>
                            </div>
                        </div>

                        <div className = "story">
                            <div className = "storyBar">
                                <span className = "storyTitle">스토리</span>
                                <span className = "all">모두 보기</span>
                            </div>
                            <div className = "profileScroll">
                            </div>
                        </div>
                    

                        <div className = "recommend">
                            <div className = "recBar">
                                <span className = "storyTitle">스토리</span>
                                <span className = "all">모두 보기</span>
                            </div>
                            <div className = "recScroll">
                            </div>
                        </div>

                        <footer>
                            Instagram 정보 ・ 지원 ・ 홍보센터 ・ API ・ <br />
                            채용정보 ・ 개인정보처리방침 ・ 약관 ・ <br />
                            디렉터리 ・ 프로필 ・ 해시태그 ・ 언어
                            <p>© 2019 INSTAGRAM</p>
                        </footer>
                    </aside>



                </div>
        </div>
        )
    }
}


export default Main;