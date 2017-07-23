import React, { Component } from 'react';
import './App.css';
import { FormGroup , FormControl ,Glyphicon , InputGroup } from 'react-bootstrap';
import Gallery from './gallery.js' ;


class App extends Component {
 
 constructor(props) {
   super(props);
 
   this.state = {
    query : ' ' ,
    items: [] 
   };
 }

  search(){

    // const Base_Url =" http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=e151110d3585aa854cc86f34ac323166&format=json&track="  ; // Base url se API call kiya hai  
    //  fetch(`${Base_Url}${this.state.query}` ,{method: 'GET'})           // Base url + query and method is to GET 
      fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=After+The+Burial&api_key=57ee3318536b23ee81d6b27e36997cde&format=json" , { method: 'GET'})
      .then ( response => response.json())                              // response jo aaya hai usse json se connect karo
       .then(json => {                                                  // items ke andar json elements fill kardo 
        let {items} = json;                                             // state ke items ko set karo bus    
         this.setState({items}) 
       });

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src= "https://appsftw.com/im/is3.mzstatic.com/image/thumb/Purple122/v4/17/ca/c1/17cac1f3-3333-08ed-44d4-5b857f465423/source/512x512bb.jpg" 
          className="App-logo" alt="logo" />
          <h2>Music Player</h2>
        </div>
           <div className ="Page-one" >
        <p className="App-intro">
            When words  fail, music speaks.
        </p>
     
        <FormGroup>
           <InputGroup className ="form ">
               <FormControl
                  type = "text" 
                  placeholder = "Search for your of Music...." 
                  onChange = {event => this.setState({ query: event.target.value})}  // how to handle blank enter or click
                   onKeyPress={event => {
                      if (event.key === 'Enter') {
                  this.search()  
                }
              }}
            />
                <InputGroup.Addon onClick = { () => this.search()} >
                  <Glyphicon glyph ="search" > </Glyphicon >
                </InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <Gallery items = {this.state.items} />

        </div>
        
        <div className = "Page-two" >
         <div className = "contact" >
         <h3>Do you have suggestions/feedback about this app?</h3>
            <p className = "par">
              Feel free to contact me.
            </p>
             </div>

      <div className="btnList text-center">
      <a className="btn btn-default" href="#"><i className="fa fa-twitter fa-lg" id="twitterIcon"></i> Twitter </a>
      <a className="btn btn-default" href="https://github.com/HiteshG"><i className="fa fa-github fa-lg" id="githubIcon"></i> GitHub </a>
      <a className="btn btn-default" href="https://www.linkedin.com/in/hitesh-gautam-180858136/"><i className="fa fa-linkedin-square fa-lg" id="linkedinIcon"></i> LinkedIn </a>
      <a className="btn btn-default" href="https://www.facebook.com/harry.gautam.98"> <i className="fa fa-facebook-official fa-lg" id="facebookIcon"></i>  Facebook </a>
      <a className="btn btn-default" href="https://mail.google.com/mail/u/1/#inbox"><i className="fa fa-envelope fa-lg" id="gmailIcon"></i> Gmail </a>
    </div>

       <p className="foot"> Copyrights © Hitesh Gautam  2017 || 
             </p>
      </div>
      </div>
    );
  }
}

export default App;
