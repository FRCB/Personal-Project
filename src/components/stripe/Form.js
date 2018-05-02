import React, {Component} from 'react';
import {injectStripe} from 'react-stripe-elements';
import Card from './Card';
import axios from 'axios';
import {connect} from 'react-redux';
import {addToOrder} from '../../ducks/reducer';

class Form extends Component{
    constructor(props) {
        super(props);
        // this.state = {
        //     amount: 100
        // }
    }

    onSubmit(e){
        e.preventDefault();
        this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {
            console.log('Received Stripe token:', token)
            axios.post('/api/charge', {token, amount: this.props.total}).then(res => {
                console.log("woopiieeee")
            }).catch( err => console.log(err))          
        });
    }

    render(){

        console.log(this.props)
        
        return(
           <form onSubmit = {(e) => this.onSubmit(e)}>
           <Card
                token = {this.onToken}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
                amount = {this.props.amount}/>
                <br/>
            <button className = 'purchase' onClick = {() => this.props.addToOrder()}> Purchase! </button>
           </form>
        )
    }
}

function mapStateToProps(state){
    return{
        cart: state.cart,
    }
}

// export default connect(injectStripe(mapStateToProps, {addToOrder})) (Form);