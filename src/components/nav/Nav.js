import React, {Component} from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import {deleteOrder} from '../../ducks/reducer';



class Nav extends Component{


        menu(){
            document.getElementById("menu").classList.toggle("show");
        }

        render(){
        return(
            <header className = 'Navbar'>
                <Link to = '/dashboard'> <div className = "title"> ShowMania </div> </Link>
                    <nav className = 'navigation'>
                        <ul>
                            <Link to = '/dashboard'> <li> Home </li> </Link>
                            <Link to = '/shows'> <li> Shows </li> </Link>
                            <Link to = '/cart'> <li> Cart </li> </Link>
                            <Link to = '/order'> <li> Order </li> </Link>
                            <a href = 'http://localhost:3005/logout'> <li /*onClick = {() => this.props.deleteOrder(this.props.order.id)} */ > Logout </li> </a>
                        </ul>
                    </nav>
                
                    <div className = "dropdown">
                        <button onClick = { () => this.menu()} className = "dropbtn"> Menu </button>
                        <div id = 'menu' className = "dropdown-content">
                            <Link to = '/dashboard'> Home </Link>
                            <Link to = '/shows'> Shows </Link>
                            <Link to = '/cart'> Cart </Link>
                            <Link to = '/order'> Order </Link>
                            <a href = 'http://localhost:3005/logout'> Logout</a>
                        </div>
                    </div>

            </header>

            
        )
    }
}

function mapStateToProps(state){
    return{
        order: state.order
    }
}

export default connect(mapStateToProps) (Nav);