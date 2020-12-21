import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import './table.styles.scss';



function Tdata({item}) {

 function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        console.log(item.id);  
      };

    return (
        <Router>
            {/* <Link to='/all-items'> */}
                <tr className='clickable-row' onClick={handleClick}>
                    <th scope="row">1</th>
                    <td>{item.name} </td>
                    <td>{item.desc} </td>
                    <td>{item.quantity} </td>
                </tr>
            {/* </Link> */}
        </Router>
    )
}

export default Tdata;

