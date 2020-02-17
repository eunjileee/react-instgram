import React, { Component } from 'react';
import logo from '../logo_text.png';
import fblogo from '../facebook_logo.png';
import { withRouter } from 'react-router-dom';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { //초기 값
          email : '',
          password : '',
          style : false,
        }
    };


    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    handleSubmit= (e) => {
        e.preventDault(); //페이지 리로딩 방지
        this.props.onCreate(this.state); // 상태값을 onCreate 를 통하여 부모에게 전달
        this.setState({ // 상태 초기화
          email: '',
          password: '',
        })
    }

    goToMain() {
        this.props.history.push('/Main');
      }

    
    render () {
        return (
            <div className = "firstArticle">
                <img className = "logo" src = {logo} alt = "logo"/>
                
                <form className = "userForm" onSubmit = {this.handleSubmit}>
                    <input 
                        name = "email"
                        type = "text" 
                        placeholder = "전화번호, 사용자 이름 또는 이메일"
                        onChange = {this.handleChange}
                        value = {this.state.email}
                    />
                    <input 
                        name = "password"
                        type = "password"   
                        placeholder = "비밀번호"
                        onChange = {this.handleChange}
                        value = {this.state.password}
                    />
                    <button 
                        type = "submit" 
                        className = "loginBtn"
                        onClick={this.goToMain.bind(this)}
                        style = { this.state.email.length > 0 && this.state.password.length > 0 ? { opacity : "1" } : { opacity : "0.4" }}>
                        {/* <Link to = "/Main"> */}
                            로그인
                        {/* </Link> */}
                    </button>
                </form>
                <div className = "bar">
                        <div className = "leftLine" />
                        <div className = "or">또는</div>
                        <div className = "rightLine" />
                </div>
                <div className = "facebook">
                    <img className = "fbLogo" src = {fblogo} alt = "fblogo"/>
                    Facebook으로 로그인
                </div>
                <div className = "forgotPassword">
                    비밀번호를 잊으셨나요?
                </div>
            </div>
        )
    }
}



export default withRouter(Form);