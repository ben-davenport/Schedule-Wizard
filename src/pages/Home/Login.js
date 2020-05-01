import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loginAction from '../../actions/loginAction';


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            msg: "",
        }
    }

    changeEmail = (e) =>{this.setState({email: e.target.value})}
    changePass = (e) =>{this.setState({password: e.target.value})}

    submitLogin=(e)=>{
        e.preventDefault();
        // some kind of email & | pw validation?
        const formData = {...this.state}
        console.log(`submit login - form data: `)
        console.log(formData)
        this.props.login(formData)
    }

    render(){
        // let titleColor = {color:'white'};
        return(
            <form>
                <h1 className='title'>Login:</h1>
                <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" onChange={this.changeEmail} value={this.state.email}></input>
                <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={this.changePass} value={this.state.password}></input>
                    <br />
                <button className="submit" onClick={this.submitLogin} > Log In </button>
                <br />
            
            </form>
        )
    }
}
function mapStateToProps(state){
    return{
        auth: state.auth
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        login: loginAction,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);