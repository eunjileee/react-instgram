import React from 'react';
import './LoginForm.css';
import Form from '../components/form';
import SubForm from '../components/sub_form';
import AppDownload from '../components/AppDownload';
import Footer from '../components/footer';


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
