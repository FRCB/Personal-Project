import React, {Component} from 'react';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import axios from 'axios';
import x from './x.png';
import './Shows.css';
import {connect} from 'react-redux';
import {addToCart} from '../../ducks/reducer';

class Shows extends Component{
    constructor(){
        super()
        this.state = {
            input: '',
            shows: []
        }
    }

    addShows(value){
        this.setState({
            input: value
        })
    }

    updateShows(){
        axios.get(`${this.props.baseUrl}/search/shows?q=${this.state.input}`).then( res => {   
            this.setState({
                shows: res.data
            })
            console.log(this.state.shows)
        })
    }

    render(){

        var showList = this.state.shows.map( (e, i) => {
            let price = e.show.rating.average * 10
            return(
                <div key={e.show.id}>
                    <div className = 'info'>
                        {e.show.image ? ( <div> <img className = 'x' src = {e.show.image.medium} alt = "showImg"/> </div> ) : <img className = "x" src = {x} alt = 'N/A'/> } 
                        {e.show.name} 
                        {e.show.rating.average ? <div> <p> Rating: {e.show.rating.average} </p> </div> : <p> Rating: N/A </p>}
                        {e.show.rating.average ? <div className = 'price'> <p> Price: ${price} </p> </div> : <p> Price: ${Math.trunc((Math.random() * 100))} </p> }
                        <button className = 'add' onClick = {() => addToCart(e.show.name, e.show.summary, e.show.image.medium, price)}> Add to Cart! </button>
                    </div>
                </div>
            )
        })

        return(
            <div className = 'get_shows_parent'>
                <Nav/>
                <div className = 'get_shows'>
                    <input className = 'search' placeholder = 'Search' onChange = {(event) => {this.addShows(event.target.value)}} /> 
                    <button className = 'find_shows' onClick = {() => this.updateShows()}> Find Shows! </button>
                </div>
                <div className = 'showlist'> {showList} </div>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        cart: state.cart
    }
}

export default connect(mapStateToProps, {addToCart}) (Shows);