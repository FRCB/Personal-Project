import React, {Component} from 'react';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import './Order.css';
import {connect} from 'react-redux';
import {getOrder, addToOrder, getCart} from '../../ducks/reducer';
import _ from 'lodash';

class Order extends Component{


    componentDidMount(){
        this.props.getCart()
    }


    render(){        
        
        let newOrder = null
        let finalOrder = []
         newOrder = _.uniqBy(this.props.order, 'show_title')
         console.log(newOrder, 'newOrder')
        if(this.props.order.length > 0){
            console.log(this.props.order)
            finalOrder = newOrder.map( (e, i) => {
                return(
                    <div key = {i}>
                        {e.show_title}
                        {e.price}
                        {e.order_ts}
                        {e.total_price}
                    </div>
                )
            })
        }
        
        let orderTotal = this.props.cart.reduce((acc, curr) => {
            return acc + curr.price
        }, 0)


        return(
            <div className = 'Order'>
                <Nav/>
                
                <button className = 'add_order' onClick = {() => this.props.addToOrder(this.props.cart[0].show_title, this.props.cart[0].price, orderTotal )}> Get Your Order! </button>
        
                <div className = 'neworder'> {finalOrder} </div>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        order: state.order,
        cart: state.cart
    }
}

export default connect(mapStateToProps, {getOrder, addToOrder, getCart} ) (Order);