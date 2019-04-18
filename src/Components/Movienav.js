import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Moviesnav extends Component {
    render() {
      return (
        <div  className='navDecoration' >
            <ul>
                <li><Link to='/'>Movies</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
      );
    }
  }
  
  export default Moviesnav;