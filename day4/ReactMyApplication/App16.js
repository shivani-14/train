import React from 'react'
class App16 extends React.Component {
    constructor(props) {
      super(props);
  
      this.username = React.createRef();
      this.password = React.createRef();
      this.email = React.createRef();
      this.phonenumber = React.createRef();
      this.state = {
          values:'',
        errors: []
      };
    }
  
    handleSubmit(event) {
      const username = this.username.current.value;
      const password = this.password.current.value;
      const email = this.email.current.value;
      const phonenumber = this.phonenumber.current.value;
      const errors = this.handleValidation(username, password, phonenumber);
  
      if (errors.length >= 0) {
        this.setState({ errors });
        return;
      }
      
    };
  
    handleValidation  (username, password, phonenumber)  {
      const errors = [];
      if (username.length === 0) {
        errors.push("Username cannot be empty");
      }
      
      if (password.length < 6) {
        errors.push("Password should be at least 6 characters long");
      }
      if (phonenumber.length < 10) {
        errors.push("phonenumber should be at least 10 digits long");
      }

      
      return errors;
    };
  
    render() {
      const { errors } = this.state;
      return (
        <div>
          <h1>React Ref Example</h1>
            {errors.map(error => <p key={error}>{error}</p>)}
            <div>
              <label>Username:</label>
              <input type="text" ref={this.username} />
            </div>
            <div>
              <label>email:</label>
              <input type="mail" ref={this.email} />
            </div>
            <div>
              <label>phonenumber:</label>
              <input type="text" ref={this.phonenumber} />
            </div>
            <div>
              <label>Password:</label>
              <input type="text" ref={this.password} />
            </div>
            <div>
              <button onClick={this.handleSubmit.bind(this)}>Signup</button>
            </div>
            <h1> {this.state.value}</h1>
          
        </div>
      );
    }
  }

  export default App16;
