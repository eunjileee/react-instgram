import React from 'react';
import './Main.css';
import logo from './logo_text.png';

class Main extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <div className = "navContainer">
                        <a href = "https://www.instagram.com/" className = "logo">
                            <img className = "logo_img" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" />
                            <div className = "line"></div>
                            <img className = "logo_text" src = {logo} />
                        </a>
                    <div className = "search">
                        <span>검색</span>
                    </div>
                    <div className = "nav_icons">
                        <img className = "item1" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
                        <img className = "item2" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                        <img className = "item3" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
                    </div>
                    </div>
                </nav>


           
                <div className = "main">
                    <section className = "feeds">
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

                        <div className = "feeds_cm">
                            <div className = "cm">
                                <div className = "cm_id2">official_frontrow</div>
                                <div className = "cm_cm"> ｜신다은<span className = "hashtag">(@shindandan_ ) #코트코디</span>...</div>
                                <div className = "cm_more">더 보기</div>
                            </div>
                            <div class = "re_cm">
                                <div className = "cm_id">elaineinstyle</div>
                                <div className = "cm_cm">좋아요</div>
                            </div>
                        </div>
                        <div className = "time">42분 전</div>
                        <div className = "comment_box">
                            <input type ="text" className = "write-comments" placeholder = "댓글 달기..."/>
                            <button className = "upload">게시</button>
                        </div>
                    </section>


            <section className = "right">  
                <div className = "main_profile">
                <img className = "right_profile" src = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/73546106_459851491338066_8192954810689912832_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=e7wJNP9WTEwAX_H52DG&oh=be6b46d55dfca76f47ce2b74fce4fe88&oe=5EB5B6CA" />
                <span className = "name">leeeeunz_</span>
                </div>
                <aside className = "story">
                <div className = "story_title">
                    <span className = "text">스토리</span>
                    <span className = "all">모두 보기</span>
                </div>
                <div className = "profile_scroll">
                    <div className = "profile_icon_story">
                    <a href = "https://www.instagram.com/official_frontrow/"><img className = "circle" src = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/67491268_1280683048803873_2961286346074750976_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=83Hlml8XeIEAX-K0mDR&oh=c137b6e8a17630e7441b0cd270a21c70&oe=5EB8856A" /></a>
                    <div className = "stories">
                        <a href = "https://www.instagram.com/official_frontrow/" className = "name2">honey_lee32</a>
                        <div className = "uploadStoryTime">8시간 전</div>
                    </div>
                    </div>
                    <div className = "profile_icon_story">
                    <a href = "https://www.instagram.com/official_frontrow/"><img className = "circle" src = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/43985578_2017164818583190_8985143575473815552_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=WjVJQ6Bogb0AX84g3Xh&oh=0eb435b18c4399c1b3ba84671537fa58&oe=5ECE640D" /></a>
                    <div className = "stories">
                        <a href = "https://www.instagram.com/official_frontrow/" className = "name2">lazygy</a>
                        <div className = "uploadStoryTime">11시간 전</div>
                    </div>
                    </div>
                    <div className = "profile_icon_story">
                    <a href = "https://www.instagram.com/official_frontrow/"><img className = "circle" src = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/25038195_2009078449361564_5344123352808161280_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=W9yE8_guR5oAX8UgUNv&oh=1fcd712d750371f9f4c800fb0862a57b&oe=5EBD51B8" /></a>
                    <div className = "stories">
                        <a href = "https://www.instagram.com/official_frontrow/" className = "name2">je_suis_daeun</a>
                        <div className = "uploadStoryTime">11시간 전</div>
                    </div>
                    </div>
                    <div className = "profile_icon_story">
                    <a href = "https://www.instagram.com/official_frontrow/"><img className = "circle" src = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/69236708_448381992430794_6077500915659571200_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=JwlkNgkfPqgAX9sZsQs&oh=a1031b122bb8c92e2b360bf64150382a&oe=5EB574BE" /></a>
                    <div className = "stories">
                        <a href = "https://www.instagram.com/official_frontrow/" className = "name2">iammingki</a>
                        <div class = "uploadStoryTime">15시간 전</div>
                    </div>
                    </div>
                    <div className = "profile_icon_story">
                    <a href = "https://www.instagram.com/official_frontrow/"><img className = "circle" src = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/71594249_1125833014288751_8012044229767331840_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=HhZ3cqvx9JUAX9lqRlz&oh=6174e380d12aa69bfa5ea95fd4d8e81b&oe=5EC83442" /></a>
                    <div className = "stories">
                        <a href = "https://www.instagram.com/official_frontrow/" className = "name2">jenniferaniston</a>
                        <div className = "uploadStoryTime">13시간 전</div>
                    </div>
                    </div>
                    <div className = "profile_icon_story">
                    <a href = "https://www.instagram.com/official_frontrow/"><img className = "circle" src = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/s150x150/70898160_763302480765829_1210846086178419542_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=qw6zpjJWhJkAX84DpMS&oh=9b84307230ffb8fce1420c9c4dc56eed&oe=5ECFDB78" /></a>
                    <div className = "stories">
                        <a href = "https://www.instagram.com/official_frontrow/" className = "name2">official_frontrow</a>
                        <div className = "uploadStoryTime">7시간 전</div>
                    </div>
                    </div>
                </div>
                </aside>
                <aside className = "recommend">
                <div className = "rec_title">
                    <div className = "text">회원님을 위한 추천</div>
                    <div className = "all">모두보기</div>
                </div>
                <div className = "rec_profile_scroll">
                    <div className = "rec_profile_story">
                    <a href = "https://www.instagram.com/official_frontrow/"><img class = "circle" src = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/43045321_438548426549364_2730715897281904640_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=zbkFEm8b6UYAX-ajuH1&oh=f400b116cc7061cf0edf93e57b2cbbf7&oe=5ED490F6" /></a>
                    <div className = "sub_follow">
                        <div className = "id_sub">
                        <a href = "https://www.instagram.com/official_frontrow/" class = "name">sinu_dada</a>
                        <div className = "sub">인기</div>
                        </div>
                        <div className = "follow">팔로우</div>
                    </div>
                    </div>
                    <div className = "rec_profile_story">
                    <a href = "https://www.instagram.com/official_frontrow/"><img className = "circle" src = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/47581322_331313240788424_7580673034705436672_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=zfSoGL2aaVAAX9BIXQr&oh=48d59892ed25c76a9aab27802ed71e83&oe=5EBD724A" /></a>
                    <div className = "sub_follow">
                        <div className = "id_sub">
                        <a href = "https://www.instagram.com/official_frontrow/" className = "name">han_ye_seul</a>
                        <div className = "sub">인기</div>
                        </div>
                        <div className = "follow">팔로우</div>
                    </div>
                    </div>
                    <div className = "rec_profile_story">
                    <a href = "https://www.instagram.com/official_frontrow/"><img className = "circle" src = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/41691649_415667635629760_4750618748640034816_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=hWnAxjXCJSwAX8eX9Wt&oh=a8476c1aca17fa16f9c53d56ba7c7695&oe=5ECB6664" /></a>
                    <div className = "sub_follow">
                        <div className = "id_sub">
                        <a href = "https://www.instagram.com/official_frontrow/" className = "name">hey_biblee</a>
                        <div className = "sub">인기</div>
                        </div>
                        <div className = "follow">팔로우</div>
                    </div>
                    </div>
                </div>
                </aside>

                <footer>
                Instagram 정보 ・ 지원 ・ 홍보센터 ・ API ・ <br />
                채용정보 ・ 개인정보처리방침 ・ 약관 ・ <br />
                디렉터리 ・ 프로필 ・ 해시태그 ・ 언어
                <p>© 2019 INSTAGRAM</p>
                </footer>
            </section>
            </div>
    </div>
        )
    }
}


export default Main;