import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import Tdata from './itemsData.component';

const items = [
    {
        id:1,
        name:'fish',
        desc:'i love fish haha',
        quantity:100
    },
    {
        id:2,
        name:'Cat',
        desc:'i love cat haha',
        quantity:80
    },
    {
        id:3,
        name:'Donkey',
        desc:'i love donkey haha',
        quantity:40
    },
    {
        id:4,
        name:'Goat',
        desc:'i love goat haha',
        quantity:60
    }

]

export default class Items extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);   
    }
    
    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      };

    render() {
        const itemMap = items.map(item => <Tdata key={item.id} item={item}/>)
        return (
            <div>
                 <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                       {itemMap} 
                    </tbody>   
                </Table>                 
            </div>
        )
    }
}
