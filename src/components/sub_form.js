import React, { Component } from 'react';


class SubForm extends Component {
    render () {
        return (
            <div className = "secondArticle">
                <span className = "text" >계정이 없으신가요? </span> 
                <span className = "join" onClick = {() => window.location.href = '#'}>가입하기</span>
            </div>
        )
    }
    
}         

export default SubForm;