import React from 'react';
import {connect} from "react-redux";
import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route} from 'react-router-dom'
import {Home} from './containers/Home';


interface IAppProps {

}

interface IAppState {
  loadingSite : boolean;
}
export class Main extends React.Component<IAppProps, IAppState> {
  constructor(props : IAppProps){
    super(props);
    this.state ={
    
    loadingSite : true,
   }
  }
 
 
    public render(){
        return (
          <div className="App">
              <Switch>
                  <Route exact path="/"  component={Home} />
              </Switch>    
            </div>
          );
      }
}

const mapStateToProps = (state: any) => ({
  
})
 
const mapDispatchToProps = {
  
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Main);
 