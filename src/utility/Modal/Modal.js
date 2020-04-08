import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import './Modal.css';
import Login from '../../pages/Home/Login';

class Modal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        let modalInLineStyle
        let modalContent
        if(this.props.siteModal.openClose === "open"){
            modalInLineStyle = {display: 'block'}
        }
        else{
            modalInLineStyle = {display: 'none'}
        }
        if(this.props.siteModal.content=== "Log in"){
           modalContent = <Login />
        }

        return(
        <div className="site-modal" style={modalInLineStyle}>
            <div className="modal-content">
                {modalContent}
            </div>
                <span onClick={this.closeModal} className="close">&times;</span>
        </div>)
    }
};
function mapStateToProps(state){
    return{
        siteModal: state.siteModal,
    }
};
function mapDispatchToProps(dispatcher){
    return bindActionCreators({

    }, dispatcher)
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);