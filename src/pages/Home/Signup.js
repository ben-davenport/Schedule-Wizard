import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import signUpAction from '../../actions/signUpAction';



class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            first: "",
            last: "",
            company: "",
            email: "",
            password: "",
            passConfirm: "",
            msg: '',
        }
    }

    componentDidUpdate(prevProps,prevState){
        if((this.props.auth.msg === 'userExists') && (prevProps.auth.msg !== 'userExists')){
            this.setState({
                msg: "This user already exists. Please log in or create a new account."
            })
        }else if((this.props.auth.msg === 'userAdded') && (prevProps.auth.msg !== 'userAdded')){
            // user was added. close the modal.
            // useHistory.push("/u/dashboard");
        }
    }

    changeEmail = (e) =>{this.setState({email: e.target.value})}
    changeFirst = (e) =>{this.setState({first: e.target.value})}
    changeLast = (e) =>{this.setState({last: e.target.value})}
    changeCompany = (e) =>{this.setState({company: e.target.value})}
    changePass = (e) =>{this.setState({password: e.target.value})}
    changePassConfirm = (e)=>{this.setState({passConfirm: e.target.value})}

    submitSignup = (e)=>{
        e.preventDefault();
        const formData = {...this.state}
        console.log('signup form submitted')
        this.props.signUpAction(formData);
        };
    
    

    render(){
        return(
        <div>
            <header className="title">Register<br/></header>
        <h3>{this.state.msg}</h3>
            <form>
                    <br />
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" onChange={this.changeFirst} value={this.state.first}></input>
                    <br />
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" onChange={this.changeLast} value={this.state.last}></input>
                    <br />
                    <label htmlFor="company">Company Name:</label>
                    <input type="text" id="company" name="company" onChange={this.changeCompany} value={this.state.company}></input>
                    <br />
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" onChange={this.changeEmail} value={this.state.email}></input>
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={this.changePass} value={this.state.password}></input>
                    <br />
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" onChange={this.changePassConfirm} value={this.state.passConfirm}></input>
                    <br />
                    <button onClick={this.submitSignup}>Submit</button>
                    <br />
                </form>
        </div>)
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        signUpAction,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);