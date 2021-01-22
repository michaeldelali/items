import React, {useCallback } from 'react';
import {withRouter} from 'react-router'
import {Form,Button,Container} from 'react-bootstrap';
import './create-items.styles.scss'
import axios from 'axios';
import {baseUrl} from '../../provider/decode'


const CreateItems = ({history})=>  {
   

      const onSubmit = useCallback  (
        async event =>{

        event.preventDefault();

        const { name,description,category,instock} = event.target.elements;

        const item = {
          name: name.value,
          description: description.value,
          category: category.value,
          instock: instock.value,
          damaged: 0,
          infield: 0
        }
    
        console.log(item);
    
        axios.post(baseUrl + 'items/add', item)
          .then(res => {
            if(res.status === 200){
            console.log(res.data);
            history.push('/')
            }
          })
          .catch(err =>{
              console.log(err)
          })
        },[history]
      );
    
    
    return (
            <div className='add-main-body d-flex flex-column align-items-center mt-5'>
                {/* <h1>ADD ITEM</h1> */}
            <Container>
            <div className='d-flex flex-column align-items-center my-4'>
                <h1>ADD ITEM</h1>
            </div>
            <Form onSubmit = {onSubmit}>
                <Form.Group controlId="formBasicName"  >
                    <Form.Label>Name of Item</Form.Label>
                    <Form.Control
                        type="text" 
                        placeholder="Name of Item"
                        name = 'name'
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        type="text" 
                        placeholder="Item Quantity" 
                        name = 'instock'
                        required
                    />
                </Form.Group>
                {/* <Form.Group controlId="formBasicInstock" style={{display:'none'}}>
                    <Form.Label>Quantity in Field</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Item Infield"
                        name = 'infield'
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicDamaged" style={{display:'none'}}>
                    <Form.Label>Quantity in Field</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Damaged"
                        name = 'damaged'
                    />
                </Form.Group> */}
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select"
                       name = 'category'
                    >
                        <option>Major</option>
                        <option>Minor</option>
                    </Form.Control>
                    <Form.Text className="text-muted">
                        What Category does item belong to?
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Item Description</Form.Label>
                    <Form.Control as="textarea" rows={3} 
                        name = 'description'
                        placeholder='A brief description about the Item'
                        required
                    />
                </Form.Group>
                <Button className='rounded-pill px-5 mt-5' variant="dark" size='lg' type="submit" value='create item'>
                    Add
                </Button>
            </Form>
            </Container>
            </div>
        )
}

    export default withRouter(CreateItems)
// export default class CreateItems extends Component {
//     constructor(props) {
//         super(props);

//         this.onChangeName = this.onChangeName.bind(this);
//         this.onChangeDescription = this.onChangeDescription.bind(this);
//         this.onChangeCategory = this.onChangeCategory.bind(this);
//         this.onChangeInstock = this.onChangeInstock.bind(this);
//         this.onChangeDamaged = this.onChangeDamaged.bind(this);
//         this.onChangeInfield = this.onChangeInfield.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
    
//         this.state = {
//            name :'',  
//            description:'',
//            category:'Major',
//            instock:'',
//            infield:0,
//            damaged:0
//         }
//     }

//     // componentDidMount() {
//     //         console.log(this.state.description)
//     //         console.log(this.state.name)
//     //         console.log(this.state.category)
//     //         console.log(this.state.infield)
//     //         console.log(this.state.instock)    
//     //   }

    

//     onChangeName(e) {
//         this.setState({
//           name: e.target.value
//         })
//       }
    
//       onChangeDescription(e) {
//         this.setState({
//           description: e.target.value
//         })
//       }
    
//       onChangeCategory(e) {
//         this.setState({
//           category: e.target.value
//         })
//       }

//       onChangeInstock(e) {
//         this.setState({
//           instock: e.target.value
//         })
//       }

//       onChangeDamaged(e) {
//         this.setState({
//           instock: e.target.value
//         })
//       }

//       onChangeInfield(e) {
//         this.setState({
//           infield: e.target.value
//         })
//       }

//       onSubmit(e) {
//         e.preventDefault();
//         const item = {
//           name: this.state.name,
//           description: this.state.description,
//           category: this.state.category,
//           instock: this.state.instock,
//           damaged:this.state.damaged,
//           infield: this.state.infield
//         }
    
//         console.log(item);
    
//         axios.post(baseUrl + 'items/add', item)
//           .then(res => console.log(res.data));
//           // history.push('/')

//         window.location = '/inventory/';
//       }
    
    
//     render() {
//         return (
//             <div className='add-main-body d-flex flex-column align-items-center mt-5'>
//                 {/* <h1>ADD ITEM</h1> */}
//             <Container>
//             <div className='d-flex flex-column align-items-center my-4'>
//                 <h1>ADD ITEM</h1>
//             </div>
//             <Form onSubmit ={this.onSubmit}>
//                 <Form.Group controlId="formBasicName"  >
//                     <Form.Label>Name of Item</Form.Label>
//                     <Form.Control type="text" placeholder="Name of Item"
//                         value ={this.state.name}
//                         onChange ={this.onChangeName}
//                     />
//                 </Form.Group>
//                 <Form.Group controlId="formBasicQuantity">
//                     <Form.Label>Quantity</Form.Label>
//                     <Form.Control type="text" placeholder="Item Quantity" 
//                         value ={this.state.instock}
//                         onChange ={this.onChangeInstock}
//                     />
//                 </Form.Group>
//                 <Form.Group controlId="formBasicInstock" style={{display:'none'}}>
//                     <Form.Label>Quantity in Field</Form.Label>
//                     <Form.Control type="text" placeholder="Item Infield"
//                         value = {this.state.infield}
//                         onChange = {this.onChangeInfield}
//                     />
//                 </Form.Group>
//                 <Form.Group controlId="formBasicDamaged" style={{display:'none'}}>
//                     <Form.Label>Quantity in Field</Form.Label>
//                     <Form.Control type="text" placeholder="Damaged"
//                         value = {this.state.damaged}
//                         onChange = {this.onChangeDamaged}
//                     />
//                 </Form.Group>
//                 <Form.Group controlId="exampleForm.ControlSelect1">
//                     <Form.Label>Category</Form.Label>
//                     <Form.Control as="select"
//                         value = {this.state.category}
//                         onChange ={this.onChangeCategory}
//                     >
//                         <option>Major</option>
//                         <option>Minor</option>
//                     </Form.Control>
//                     <Form.Text className="text-muted">
//                         What Category does item belong to?
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group controlId="exampleForm.ControlTextarea1">
//                     <Form.Label>Item Description</Form.Label>
//                     <Form.Control as="textarea" rows={3} 
//                         value ={this.state.description}
//                         onChange ={this.onChangeDescription}
//                         placeholder='A brief description about the Item'
//                     />
//                 </Form.Group>
//                 <Button className='rounded-pill px-5 mt-5' variant="dark" size='lg' type="submit" value='create item'>
//                     Add
//                 </Button>
//             </Form>
//             </Container>
//             </div>
//         )
//     }
// }
