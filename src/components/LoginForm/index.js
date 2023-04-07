// Write your JS code h

import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/home')
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    this.setState({username: '', password: ''})
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    // const data = await response.json()

    if (response.ok === true) {
      this.onSuccessLogin()
      this.setState({errorMsg: ''})
    } else {
      this.setState({errorMsg: "*Username and Password didn't matched"})
    }
  }

  onChangeUsername = event => {
    const {value} = event.target.value

    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    // console.log(this.state)
    const {errorMsg, username, password} = this.state
    return (
      <div className="login-bg">
        <div className="sm-logo">
          <img
            alt="website logo"
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
        </div>
        <div className="login_img_container">
          <img
            alt="website login"
            className="login"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          />
        </div>
        <div className="lg-form">
          <img
            alt="website logo"
            className="lg-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <form className="form" onSubmit={this.onSubmitLogin}>
            <label className="label" htmlFor="username">
              USERNAME
            </label>
            <br />
            <input
              value={username}
              id="username"
              type="text"
              placeholder="Username"
              onChange={this.onChangeUsername}
            />
            <br />
            <label className="label" htmlFor="password">
              PASSWORD
            </label>
            <br />
            <input
              value={password}
              id="password"
              type="password"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
            <br />
            <div>
              <button type="submit" className="login_btn">
                Login
              </button>
            </div>
          </form>
          <p className="errorMsg">{errorMsg}</p>
        </div>
      </div>
    )
  }
}

export default LoginForm
