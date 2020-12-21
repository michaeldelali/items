import React, { Component } from 'react';
import {Container,Button,Form} from 'react-bootstrap';
import itempic from '../../assets/images/profile.png';
import './item-show.styles.scss';
import Swiper from 'swiper';
import $ from 'jquery';
import {History} from '../Ag-table/ag-table.component';
import axios from 'axios';
import dateFormat from 'dateformat';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';


class ShowItem extends Component {
    constructor() {
        super();

        this.onChangeValue = this.onChangeValue.bind(this);
        this.updateAdd = this.updateAdd.bind(this);
        this.updateTake = this.updateTake.bind(this);
    
        this.state = {
            dateNow: new Date().toLocaleString(),
           name :'',  
           description:'',
           category:'',
           instock:0,
           infield:0,
           total:0,
           change:'',
           user:'',
           currentUser:null
        }
    }

    //  async nameCall(){
    //     const username = await  auth.currentUser.displayName
    //     return await 
    //     this.setState({user:username});
    // }

    componentDidMount(){
        // this.nameCall()

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
              const userRef = await createUserProfileDocument(userAuth);
              
              userRef.onSnapshot(snapShot => {
                this.setState({
                  currentUser: {
                    id: snapShot.id,
                    ...snapShot.data()
                  }
                });
                console.log(this.state);
              });
            }
      
            // this.setState({ currentUser: userAuth });
            
          });

        // console.log(auth.currentUser.displayName)
        // this.setState({user:auth.currentUser.displayName})

        //get data from database
        // console.log(this.state)
        // console.log(this.props.match)
        axios.get('http://localhost:9000/items/'+ this.props.match.params.id)
        .then(response => {
          this.setState({
            name: response.data.name,
            description: response.data.description,
            instock: response.data.instock,
            infield: response.data.infield,
            category: response.data.category,
            createdAt: (response.data.createdAt),
            total: response.data.instock + response.data.infield
            // date: new Date(response.data.date)
          })   
        })
        .catch(function (error) {
          console.log(error);
        })
        

        this.swiper = new Swiper('.blog-slider', {
            // spaceBetween: 30,
            effect: 'fade',
            // loop: true,
            mousewheel: {
              invert: false,
            },
            // autoHeight: true,
            pagination: {
              el: '.blog-slider__pagination',
              clickable: true,
            }
          })
    }

    onChangeValue(e){
        this.setState({
            change:e.target.value
        })
    }
    
    updateAdd(e){
        e.preventDefault();
        if (parseInt(this.state.change,10) <= parseInt(this.state.infield,10)){
            const itemAdd = {
                instock: parseInt(this.state.change,10) + parseInt(this.state.instock,10),
                infield: parseInt(this.state.infield,10) - parseInt(this.state.change,10) 
            }
            console.log(itemAdd)
            axios.post('http://localhost:9000/items/update/'+ this.props.match.params.id,itemAdd)
            .then(res => {
                console.log(res.data);
                this.setState({
                    instock:itemAdd.instock,
                    infield:itemAdd.infield
                })
            
                const history = {
                    user:this.state.currentUser.displayName,
                    activity:"Added",
                    itemId:this.props.match.params.id,
                    quantity:this.state.change,
                    instock:this.state.instock,
                    infield:this.state.infield
                };
                console.log(history);

                axios.post('http://localhost:9000/history/add',history)
                .then(res => console.log(res.data));

            })
            }
            else{
                $('.form-text').html("Quantity must be less than or equal to that on field") 
            }
        }


    updateTake(e){
        e.preventDefault();
        if (parseInt(this.state.change,10) <= parseInt(this.state.instock,10)){
        const itemAdd = {
            instock: parseInt(this.state.instock,10) - parseInt(this.state.change,10),
            infield: parseInt(this.state.infield,10) + parseInt(this.state.change,10) 
        }
        console.log(itemAdd)
        axios.post('http://localhost:9000/items/update/'+ this.props.match.params.id,itemAdd)
        .then(res => {
            console.log(res.data);
            this.setState({
                instock:itemAdd.instock,
                infield:itemAdd.infield
            }) 

            const history = {
                user:this.state.currentUser.displayName,
                activity:"Took",
                itemId:this.props.match.params.id,
                quantity:this.state.change,
                instock:this.state.instock,
                infield:this.state.infield
            };
            console.log(history);

            axios.post('http://localhost:9000/history/add',history)
            .then(res => console.log(res.data));

        })
        }
    else{
        $('.form-text').html("Quantity must be less than or equal to that in stock") 
    }
    }

    render() {
        
        return (
            <div>
            <div className="blog-slider">
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                    <div className="blog-slider__img">
                        
                        <img src={itempic} alt=""/>
                    </div>
                    <form onSubmit={this.updateAdd} className="blog-slider__content">
                        <span className="blog-slider__code">{this.state.dateNow}</span>
                        <div className="blog-slider__title">{this.state.name}</div>
                        <div className="blog-slider__text">Date Logged: {dateFormat(this.state.createdAt,"dddd,mmmm,dS,yyyy hh:mm")} </div>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Enter amount to take or add" 
                               value ={this.state.change}
                               onChange ={this.onChangeValue}
                            />
                        </Form.Group>
                        <Form.Text className="text-danger my-2">
                        </Form.Text>
                        <div className="buttons d-flex flex-row justify-content-center">
                            <Button variant="outline-dark" type="submit" className='rounded-pill px-5 m-2'> ADD</Button>
                            <Button variant="dark" type="submit" onClick={this.updateTake} className='rounded-pill px-5 m-2'> TAKE</Button>
                        </div>
                        {/* <a href="#" className="blog-slider__button btn1">READ MORE</a>
                        <a href="#" className="blog-slider__button btn2">READ MORE</a> */}
                    </form>
                    </div>    
                </div>
                <div className="blog-slider__pagination"></div>
            </div>

                <ul>
                <li className="card">
                    <div className="card__flipper">
                    <div className="card__front">
                        <p className="card__name"><span>On</span><br/>Field</p>
                        <p className="card__num">{this.state.infield}</p>
                    </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__flipper">
                    <div className="card__front">
                        <p className="card__name"><span>In</span><br/>Stock</p>
                        <p className="card__num">{this.state.instock}</p>
                    </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__flipper">
                    <div className="card__front">
                        <p className="card__name"><br/>Total</p>
                        <p className="card__num">{this.state.total}</p>
                    </div>
                    </div>
                </li>
                </ul>
        
        <Container className='content'>
            <h2>Description</h2>
            <p>{this.state.description}</p>
        </Container>

            {/* history container. */}
            <Container>
                <History id={this.props.match.params.id}/>
            </Container>
</div>

            
        )
    }
}

export default ShowItem
