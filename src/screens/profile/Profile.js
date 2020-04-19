import React, {Component} from 'react'
import Header from '../../common/header/Header';
import {Redirect} from 'react-router-dom';
import './Profile.css'

import {Avatar, Card, CardMedia,CardContent, Container, Fab,GridList,GridListTile, Typography, Grid} from '@material-ui/core/';

import EditIcon from '@material-ui/icons/Edit'

class Profile extends Component {

    constructor(props) {
        super(props);
        this.baseUrl = 'https://api.instagram.com/v1/';
        this.state = {
            user_data: null,
            profile_picture: null,
            recent_media: null
        }
    }

    componentDidMount() {
        this.fetchOwnerInfo();
        this.fetchMostRecentMedia();
    }


    render() {
        if (this.props.location.state === undefined) {
            return <Redirect to='/'/>
        } else if (this.props.location.state.loginSuccess === true) {
            console.log(this.state.recent_media)
            return <div>
                <Header {...this.props} isLoggedIn={true} showSearchBox={false}
                        profilePictureUrl={this.state.profile_picture} showMyAccount={false}/>
                <Container>
                    <div style={{height: "2rem"}}></div>
                    <Grid container spacing={3} justify="flex-start">
                        <Grid item xs={2}/>
                        <Grid item xs={2}>
                            {this.state.profile_picture ? (
                                <Avatar
                                    alt='profile_pic'
                                    id="profile-pic"
                                    variant="circle"
                                    src={this.state.profile_picture}
                                    style={{marginTop: 10}}
                                />
                            ) : null}
                        </Grid>
                        <Grid item xs={4} id='user_name'>
                            <Typography variant="h4" component="h1" style={{marginBottom: 5}}>
                                {this.state.recent_media
                                    ? this.state.user_data.username
                                    : null}
                            </Typography>
                            <Grid container spacing={3} justify="center">
                                <Grid item xs={4}>
                                    Posts:{" "}
                                    {this.state.user_data
                                        ? this.state.user_data.counts.media
                                        : null}
                                </Grid>
                                <Grid item xs={4}>
                                    Follows:{" "}
                                    {this.state.user_data
                                        ? this.state.user_data.counts.follows
                                        : null}
                                </Grid>
                                <Grid item xs={4}>
                                    Followed By:{" "}
                                    {this.state.user_data
                                        ? this.state.user_data.counts.followed_by
                                        : null}
                                </Grid>
                            </Grid>
                            <Typography variant="h6" component="h2" style={{marginTop: 5}}>
                                {this.state.user_data ? this.state.user_data.full_name : null}
                                {this.state.user_data && !this.state.user_data.full_name
                                    ? this.state.user_data.full_name
                                    : null}
                                <Fab
                                    color="secondary"
                                    id="edit-profile"
                                    aria-label="edit"
                                >
                                    <EditIcon fontSize="small"/>
                                </Fab>
                            </Typography>
                        </Grid>
                        <Grid item xs={4}/>
                    </Grid>
                </Container>
                <Container>
                    <Grid container spacing={1} direction="row" alignItems="center">
                        {this.state.recent_media &&
                        this.state.recent_media.map((mediaObj, index) => (
                            <Grid
                                // id="media-grids"
                                item
                                xs={4}
                                key={mediaObj.id}>
                                <Card variant="outlined">
                                    <CardMedia style={{height: 0,paddingTop: '56.25%'}}
                                        image={mediaObj.images.standard_resolution.url}
                                        title={mediaObj.images.standard_resolution.url}/>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>

        }
    }

    fetchOwnerInfo = () => {
        let data = null;

        let xhr = new XMLHttpRequest();

        let that = this;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({
                    user_data: JSON.parse(this.responseText).data,
                    profile_picture: JSON.parse(this.responseText).data.profile_picture
                });

            }
        });

        let url = this.baseUrl + "users/self/?access_token=" + sessionStorage.getItem("access-token");

        xhr.open("GET", url);

        xhr.send(data);
    }

    fetchMostRecentMedia = () => {
        let data = null;

        let xhr = new XMLHttpRequest();

        let that = this;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({
                    recent_media: JSON.parse(this.responseText).data
                });
            }
        });

        let url = this.baseUrl + "users/self/media/recent/?access_token=" + sessionStorage.getItem("access-token");

        xhr.open("GET", url);

        xhr.send(data);
    }
}

export default Profile;