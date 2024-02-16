import React from 'react';
import './table.css';
export default function Table(){
    return(
        <>
                        <div className="container">
                        <table class="table table-striped table-bordered">
                        <thead>
                        <tr>
                    
                    <th scope="col">Team Name</th>
                    <th scope="col">Score</th>
                    <th scope="col">Visibility</th>
                    <th scope="col">Rank</th>
                    
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    
                    </tr>
                    <tr>
                    
                    <td>KJSND</td>
                    <td>15</td>
                    <td>true</td>
                    
                    
                    </tr>
                    <tr>
                    
                    <td>Jacob</td>
                    <td>10</td>
                    <td>f</td>
                    </tr>
                    <tr>
                    
                    <td>Larry the Bird</td>
                    <td>8</td>
                    <td>t</td>
                    </tr>
                </tbody>
                </table>
                <input className="name" type="text"></input>
                <input className="score" type="number"></input>
                <input className="tf" type="checkbox"></input>
                <button className="button">Create</button>
                <button className="button">Update</button>
                </div>
                
        </>
    )
}