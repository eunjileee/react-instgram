import React, { Component } from 'react';
import logo from '../logo_text.png';
import fblogo from '../facebook_logo.png';



class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email : '',
          password : ''
        }
    };


    handleOnChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render () {
        return (
            <form className = "firstArticle">
                <img className = "logo" src = {logo} alt = "logo"/>
                <div className = "userForm">
                    <input 
                        name = "email"
                        type = "text" 
                        placeholder = "전화번호, 사용자 이름 또는 이메일"
                        onChange = {this.handleOnChange}
                        value = {this.state.email}
                    />
                    <input 
                        name = "password"
                        type = "password"   
                        placeholder = "비밀번호"
                        onChange = {this.handleOnChange}
                        value = {this.state.password}
                    />
                    <button className = "loginBtn">로그인</button>
                    <div className = "line">
                        <div className = "leftLine" />또는<div className = "rightLine" />
                    </div>
                </div>
                <div className = "facebook">
                    <img className = "fbLogo" src = {fblogo} alt = "fblogo"/>
                    Facebook으로 로그인
                </div>
                <div className = "forgotPassword">
                    비밀번호를 잊으셨나요?
                </div>
            </form>
        )
    }
}



export default Form;