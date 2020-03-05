import React from 'react'
import { connect } from 'react-redux'
import { loginAttempt } from '../actions/index'
import Loader from 'react-loader-spinner';

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            login: '',
            password: '',
            isLoggedIn: false,
            isLoading: false
        }
    }
    componentDidMount() {
        
    }

    componentDidUpdate() {
        if(this.props.auth.isLoggedIn){
            this.props.history.push({
                pathname: '/admin',
                state: this.props.auth
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {login, password} = this.state
        this.setState({isLoading: true})
        this.props.loginAttempt(login, password)
    }

    render() {
        return(
            <div className="login-container">
                <form onSubmit={this.handleSubmit} className="form">
                    <input type="text" onChange={this.handleChange} placeholder="Логин" id='login' className="input-style"/>
                    <input type="password" onChange={this.handleChange} placeholder="Пароль" id='password' className="input-style"/>
                    {this.state.isLoading ? 
                        <div style={{textAlign: "center"}}>
                            <Loader 
                                type="ThreeDots" 
                                color="#2185d0"
                                height={40}
                                width={40}
                            />
                        </div> :
                    <input type="submit" value="Войти" className="login-btn"/>}
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {login, isLoggedIn, isLoading} = state.auth
    return {
        auth: {
            login, isLoggedIn, isLoading
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginAttempt: (login, password) => dispatch(loginAttempt(login, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)