import React from 'react'

class  Login extends  React.Component {

  state = {
    user_name: '',
    password: ''
  }

  handleLoginSubmit = (e) =>{
    e.preventDefault()
   let user_name =  e.target.user_name.value
   let password = e.target.password.value
   
   fetch('http://localhost:3001/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                user_name: user_name,
                password: password
        })
   })
   .then(res=> res.json())
   .then(user => {
      localStorage.setItem('token', user.auth_token)
    })    

}

handleChange = (e) => {
  this.setState({
    [e.target.user_name]: e.target.value
  })
}

  render(){
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleLoginSubmit}>
          <div class="login-form">
            <label for="username"><b>Username</b></label><br/>
            <input onChange={this.handleChange} type="text" placeholder="Enter Username" name="user_name" required/>
            <br/>
            <br/>
            <label for="password"><b>Password</b></label><br/>
            <input onChange={this.handleChange} type="password" placeholder="Enter Password" name="password" required/>
            <br/>
            <br/>
            <input type="submit" />Login
          </div>
        </form>
      </div>
    );
  }
}
  export default Login;