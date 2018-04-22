import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Homepage.css'

import defaultimage from '../../assets/images/default-banner.jpeg';

class Homepage extends Component {

    renderOrganisationCard = ({login, name , description, avatar_url, public_repos, banner = defaultimage, followers} = {}) => <div className={`org-card card`}>
        <img className="banner-image" src={banner} alt=""/>
        <div className="detail-text">
            <img  className="org-logo" src={avatar_url} alt=""/>
            <h5>{name}</h5>
            <small>@{login}</small>
            {description && description !== "" && <p>{description}</p>}
        </div>
        <hr/>
        <div className="stats-bar">
            <div className="stat">
                <h5>{public_repos}</h5>
                <small>Repos</small>
            </div>
            <div className="stat">
                <h5>12</h5>
                <small>Peoples</small>
            </div>
            <div className="stat">
                <h5>{followers}</h5>
                <small>Followers</small>
            </div>
        </div>
    </div>;

    renderMembersCard = ({avatar_url, login}) => <div className={`team-card card`}>
        <h5>Team Members</h5>
        <div className="team-wrap">
            {this.props.members && this.props.members.length > 0 && this.props.members.map(({avatar_url, login}, i) =>
                <div className="row" key={i}>
                    <img src={avatar_url} alt=""/>
                    <a href={`http://github.com/${login}`} target="_blank">@{login}</a>
                </div>
            )}
        </div>
    </div>;

    renderOrganisationForm = ({name, login, email} = {}) => <div className={`org-form card`}>
        <h5>Organisation Details</h5>
        <div className="form-row by-three">
            <label>
                <small>Organization</small>
                <input type="text" disabled value={name}/>
            </label>
            <label>
                <small>Username</small>
                <input type="text" value={login}/>
            </label>
            <label>
                <small>Email Address</small>
                <input type="text" value={email}/>
            </label>

        </div>
        <label>
            <small>Address</small>
            <input type="text" />
        </label>
        <div className="form-row by-three">
            <label>
                <small>City</small>
                <input type="text" />
            </label>
            <label>
                <small>Country</small>
                <input type="text" />
            </label>
            <label>
                <small>Postal Code</small>
                <input type="text"/>
            </label>
        </div>
    </div>;

    render() {
        return (
            <div className={`homepage page`}>
                <div className="first-card-row">
                    {this.renderOrganisationCard({...this.props.data})}
                    {this.renderMembersCard({})}
                </div>
                {this.renderOrganisationForm({...this.props.data})}
            </div>
        );
    }
}

Homepage.propTypes = {};
Homepage.defaultProps = {};

export default Homepage;
