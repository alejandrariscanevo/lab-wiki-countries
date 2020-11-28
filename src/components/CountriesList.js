import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class CountriesList extends Component {
    render() {
        return (
              <div class="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
          <div class="list-group">
          <Link to="/ZWE" class="list-group-item
          list-group-item-action">
          🇿🇼 Zimbabwe
          </Link>
            
            <a class="list-group-item list-group-item-action"></a>
          </div>  
            </div>
        )
    }
}
