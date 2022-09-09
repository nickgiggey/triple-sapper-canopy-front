import axios from 'axios';
import '../Utilities/reset.css';
import './Profile.css';
import React, { Component } from 'react';

const api = axios.create({
    baseURL: 'http://localhost:1337/api/'
});

class Profile extends Component {
    state = {
        profile: []
    };
    constructor() {
        super();
        this.getProfile()
    }

    getProfile = async () => {
        let data = await api.get('/initiate').then(({ data }) => data);
        this.setState({ profile: data });
    };

    createProfile = async () => {
        let res = await api.post('/profile', { id: 0 });
        console.log(res);
        this.getProfile()
    };

    render() {
        return (
                <div className="profile-container">
                    <button onClick={this.createProfile}>Show Profile</button>
                    {this.state.profile.map(profile => <h2 key={profile.id}>{profile.id}</h2>)}
                </div>
        );
    }
}

export default Profile;