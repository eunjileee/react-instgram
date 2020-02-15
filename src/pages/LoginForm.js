import React from 'react';
import './LoginForm.css';
import Form from '../components/Form';
import SubForm from '../components/SubForm';
import AppDownload from '../components/AppDownload';
import Footer from '../components/Footer';


class LoginForm extends React.Component {
  handleCreate = (data) => {
    console.log(data);
  }

  render () {
    return (
        <div className = "container">
          <Form 
          onCreate = {this.handleCreate} 
          />
          <SubForm />
          <AppDownload />
          <Footer />
        </div>
    )
  }
}

export default LoginForm;
