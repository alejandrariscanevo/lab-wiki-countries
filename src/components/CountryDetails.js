import React, { Component } from 'react'
import axios from 'axios'

export default class CountryDetails extends Component {
    render() {
        console.log("Estos son props")

        state = {
            infoCountry: []
        }
        return (
                     <div class="col-7">
          <h1>{this.props.infoCountry[0].name.common}</h1>
          <table class="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{width: "30%"}}>{Capital}</td>
                <td>{this.props.infoCountry[0].capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{this.props.infoCountry[0].area}
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                  {
                      {this.props.infoCountry[0].borders.map(
                          (border) => {
                            return (
                                <li><a href={`/${border}`}>{border}</a></li>  
                            )
                          }
                      )}
                  }
                    <li><a href="/AND">Andorra</a></li>
                    <li><a href="/BEL">Belgium</a></li>
                    <li><a href="/DEU">Germany</a></li>
                    <li><a href="/ITA">Italy</a></li>
                    <li><a href="/LUX">Luxembourg</a></li>
                    <li><a href="/MCO">Monaco</a></li>
                    <li><a href="/ESP">Spain</a></li>
                    <li><a href="/CHE">Switzerland</a></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>   
        )
    }
}
