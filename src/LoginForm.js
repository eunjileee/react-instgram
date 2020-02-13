import React from 'react';
import './LoginForm.css';
import Form from './components/form';
import SubForm from './components/sub_form';
import AppDownload from './components/app_download';
import Footer from './components/footer';


class Login extends React.Component {
  

  render () {
    return (
        <div className = "container">
          <Form />
          <SubForm />
          <AppDownload />
          <Footer />
        </div>
    )
  }
}

export default Login;
