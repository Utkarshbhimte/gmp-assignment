import React, { Component } from 'react';

//Components
import Navbar from './components/Navbar';

//Pages
import Homepage from './pages/Homepage'
import AnalyticsPage from './pages/AnalyticsPage'

//Styles
import './assets/styles/default.css'


class App extends Component {
    state = {
        data: null,
        repos: null,
        members: null,
        dashboard: 'home'
    };

    async componentDidMount() {
        try{
            const data = await fetch('https://api.github.com/orgs/angular').then(res => res.json())
                .catch(err => {throw err});

            if (!data.id) throw new Error(`Invalid Response`);

            this.setState({data});

            const repos = await fetch('https://api.github.com/orgs/angular/repos').then(res => res.json())
                .catch(err => {throw err});


            this.setState({repos});

            const members = await fetch("https://api.github.com/orgs/angular/public_members").then(res => res.json())
                .catch(err => {throw err});

            this.setState({members});
        }catch(e){
            console.error(e)
        }


    }

    _navigateTo = dashboard => this.setState({dashboard});

    render() {
    return (
      <div className="contain-all">
        <Navbar navigateTo={this._navigateTo} active={this.state.dashboard}/>
        <div className="dashboard">
            {   this.state.dashboard === 'home' &&
                <Homepage {...this.state}/>
            }
            {   this.state.dashboard === 'analytics' &&
                <AnalyticsPage {...this.state}/>
            }
        </div>
      </div>
    );
  }
}

export default App;
