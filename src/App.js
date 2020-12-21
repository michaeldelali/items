import React,{Component} from 'react';
import './App.scss';
import SideNavbar from '../src/components/side-navbar/side-navbar.component';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from '../src/components/header/header.component';
import Items from '../src/components/table/items.component';
import {ATable} from '../src/components/Ag-table/ag-table.component';
import CreateItem from '../src/components/create-items/create-items.component';
import ShowItem from './components/item-show/item-show.component';
import Register from './pages/register/register.component';
import Header2 from './components/header2/header2.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import $ from 'jquery'

// const {test} = useContext(firebaseAuth)
// console.log(test)

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
    
  }


  unsubscribeFromAuth = null;
  
  componentDidMount() {
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
          // console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
      
    });
    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


    render(){
          return (
            <Router>
                <Header2 currentUser={this.state.currentUser}/>
                  <div className='inner-body'>
                    <Route path='/' exact component={ATable}/>
                    <Route path ='/createItem' component={CreateItem}/>
                    <Route path ='/item/:id' component={ShowItem}/>
                    <Route path ='/signin' component={Register}/>   
                  </div>
            </Router>
          );
      }
}

export default App
