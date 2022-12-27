import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=6
  api="// put api key from newsapi.com";
 state={
  progress:0
 }

 setprogress=(progress)=>{
  this.setState({progress: progress})
 }
  render() {
    return (
      <div>
         <Router>
         <LoadingBar
         height={2}
        color='#f11946'
        progress={this.state.progress}
        />
        <NavBar/>
        <Switch>
        <Route exact path="/technology"><News api={this.api} setprogress={this.setprogress} pageSize={this.pageSize} key="technology" category='technology'/></Route>
          <Route exact path="/business"><News api={this.api} setprogress={this.setprogress} pageSize={this.pageSize} key="business" category='business'/></Route>
          <Route exact path="/entertainment"><News api={this.api} setprogress={this.setprogress} pageSize={this.pageSize} key="entertainment" category='entertainment'/></Route>
          <Route exact path="/health"><News api={this.api} setprogress={this.setprogress} pageSize={this.pageSize} key="health" category='health'/></Route>
          <Route exact path="/science"><News api={this.api} setprogress={this.setprogress} pageSize={this.pageSize} key="science" category='science'/></Route>
          <Route exact path="/sports"><News api={this.api} setprogress={this.setprogress} pageSize={this.pageSize} key="sports" category='sports'/></Route>
          <Route exactpath="/general"><News api={this.api} setprogress={this.setprogress} pageSize={this.pageSize} key="general"  category='general'/></Route>
          
        </Switch>  
        </Router>
      </div>
    )
  }
}

// 55880454a1a346a9986dc6c80368ebbd
