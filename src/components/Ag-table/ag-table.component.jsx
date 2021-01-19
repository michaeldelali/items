import React from 'react';
import {  AgGridReact, AllModules } from 'ag-grid-react';
import axios from 'axios';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './ag-table.styles.scss';
import {useHistory} from 'react-router-dom'


export const GridShow = ({link}) => {


    // const [gridApi, setGridApi] = useState(null);
    // const [gridColumnApi, setGridColumnApi] = useState(null);
    // const [rowData, setRowData] = useState(null);
    const history = useHistory();

    
    const onGridReady =(params)=>{
        console.log('grid is ready')
        axios.get('http://localhost:9000/'+link)
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
        const id = answer[0]['_id']; 
        history.push('/item/'+id);
        console.log("clicked")           
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
            <div className="ag-theme-alpine" style={ { height:'80vh', width:'100%' } }>
                <AgGridReact
                    rowSelection={'single'}
                    onGridReady = {onGridReady}
                    onSelectionChanged={onSelectionChanged}
                    columnDefs ={columnDefs}
                    >
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
      
      var columnDefs = [
          {headerName: "User", field: "user",sortable:true,filter:true},
          {headerName: "Activity", field: "activity"},
          {headerName: "Quantity", field: "quantity"},
          {headerName: "In Stock", field: "instock"},
          {headerName: "On Field", field: "infield"},
          {headerName: "Damaged", field: "damaged"},
          {headerName: "Date", field: "createdAt"},
      ];

      var  modules = AllModules;

    return (
            <div>
            <div className="ag-theme-alpine" style={ { height: 600, width:'100%' } }>
                <AgGridReact
                modules = {modules}
                    rowSelection={'single'}
                    // onSelectionChanged={onSelectionChanged}
                    columnDefs ={columnDefs}
                    enableCellChangeFlash={true}
                    onGridReady = {onGridReady}
                />
              
            </div>
            </div>
    );
}