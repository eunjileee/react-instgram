import React, { Component, Fragment } from 'react';
import './App.css';
import logo from './logo_text.png';


class App extends React.Component {
  constructor (props) {
    super (props);

  }

  render () {
    return (
      <Fragment>
        <div className = "Container">
          <div className = "firstArticle">
            <div><img className = "logo" src = {logo} alt = "logo"/></div>
            <div className = "UserForm">
              <div className = "Email">
                <input type = "text" placeholder = "전화번호, 사용자 이름 또는 이메일"/>
              </div>
              <div className = "Password">
                <input type = "password" placeholder = "비밀번호" />
              </div>
              <div className = "LoginBtn">
                <button value = "로그인"/>
              </div>
              <div className = "Line">
                <div className = "LeftLine" />또는<div className = "RightLine" />
              </div>
            </div>
          </div>
          <div className = "SecondArticle">
            <span className = "Text" >계정이 없으신가요? </span> 
            <span className = "join" onClick = {() => window.location.href = '#'}>가입하기</span>
          </div>
          <div className = "ThirdArticle">
            <p className = "DownloadMsg">앱을 다운로드하세요.</p>
            <div className = "Btns">
              <button className = "Ios" onClick = {() => window.location.href = 'https://apps.apple.com/app/instagram/id389801252?vt=lo'} />
              <button className = "Android" onClick = {() => window.location.href = 'https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D2020725B-F929-46F8-A675-D47E945CAE16%26utm_content%3Dlo%26utm_medium%3Dbadge'}/>
            </div>
          </div>
          <div className = "footer">
            <span className = "footerContents">
              <span>INSTAGRAM정보</span>
              <span>도움말</span>
              <span>홍보 센터</span>
              <span>API</span>
              <span>채용 정보</span>
              <span>개인정보처리방침</span>
              <span>약관</span>
              <span>디렉터리</span>
              <span>프로필</span>
              <span>해시태그</span>
              <span>언어</span>
            </span>
            <span className = "copyRight">
              © 2020 INSTAGRAM FROM FACEBOOK
            </span>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App;


// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }
