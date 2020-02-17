import React from 'react'

class Login extends React.Component {
    componentDidMount() {
        
    }

    render() {
        return(
            <div className="login-container">
                <form className="form">
                    <input type="text" placeholder="Логин" className="input-style"/>
                    <input type="text" placeholder="Пароль" className="input-style"/>
                    <input type="submit" value="Войти" className="login-btn"/>
                </form>
            </div>
            
        )
    }

    
}

export default Login