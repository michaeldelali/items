import React, { useState } from 'react';
import {Container} from 'react-bootstrap';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import axios from 'axios';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './ag-table.styles.scss';
import { Link, Router } from 'react-router-dom';


export const ATable = () => {

    // const [gridApi, setGridApi] = useState(null);
    // const [gridColumnApi, setGridColumnApi] = useState(null);
    // const [rowData, setRowData] = useState(null);

    const onGridReady =(params)=>{
        console.log('grid is ready')
        axios.get('http://localhost:9000/items/')
        .then(response => {
          if (response.data.length > 0) {
           params.api.applyTransaction({add:response.data})
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }
    async function onSelectionChanged (e){
        const answer = await e.api.getSelectedRows();
        const id = answer[0].['_id']; 
        window.location = '/item/'+id;
        // return(
        // console.log(
        // <Link
        // to={{
        //     pathname:'/item/'+id
        // }}
        // ></Link>   
        // )
        // );
               
      };   
      
      var columnDefs = [
          {headerName: "ID", field: "_id",sortable:true,filter:true},
          {headerName: "Name", field: "name",sortable:true,filter:true},
          {headerName: "Category", field: "category"},
          {headerName: "In Stock", field: "instock"},
          {headerName: "On Field", field: "infield"},
          {headerName: "Description", field: "description",filter:true}
      ];

    return (
            <div>
            <div className="ag-theme-alpine" style={ { height: 600, width:'100%' } }>
                <AgGridReact
                    rowSelection={'single'}
                    onGridReady = {onGridReady}
                    onSelectionChanged={onSelectionChanged}
                    columnDefs ={columnDefs}

                    >
                    {/* <AgGridColumn field="name" sortable={true}></AgGridColumn>
                    <AgGridColumn field="category"></AgGridColumn>
                    <AgGridColumn field="instock"></AgGridColumn>
                    <AgGridColumn field="infield"></AgGridColumn>
                    <AgGridColumn field="description" filter={true}></AgGridColumn> */}
                </AgGridReact>
            </div>
            </div>
    );
};

export const History =({id}) => {

    const onGridReady =(params)=>{
        console.log('grid is ready')
        axios.get('http://localhost:9000/history/item/'+ id)
        .then(response => {
          if (response.data.length > 0) {
           params.api.applyTransaction({add:response.data})
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }

    // const onSelectionChanged = (e) => {
    //     const answer = e.api.getSelectedRows();
    //     const linkId = answer[0].['_id']; 
    //     window.location = '/item/'+ linkId;           
    //   };   
      
      var columnDefs = [
          {headerName: "User", field: "user",sortable:true,filter:true},
          {headerName: "Activity", field: "activity"},
          {headerName: "Quantity", field: "quantity"},
          {headerName: "In Stock", field: "instock"},
          {headerName: "On Field", field: "infield"},
          {headerName: "Date", field: "createdAt"},
      ];

    return (
            <div>
            <div className="ag-theme-alpine" style={ { height: 600, width:'100%' } }>
                <AgGridReact
                    rowSelection={'single'}
                    onGridReady = {onGridReady}
                    // onSelectionChanged={onSelectionChanged}
                    columnDefs ={columnDefs}
                    >
                </AgGridReact>
            </div>
            </div>
    );
}