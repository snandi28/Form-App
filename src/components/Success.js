import React,{ Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

 export class Success extends Component{
     render(){
         return(
             <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="SUCCESS"/>
                    <h1>Thank you for your submission  </h1>
                    <p>You will receive a email with further instruction</p>
           
                </React.Fragment>
             </MuiThemeProvider>
         );
     }
 }
// styles= {
 //    button:{
   //      margin:15
 //    }
 //}
 export default Success;
    