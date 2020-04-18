import React, {Component} from 'react';
import Header from "../../common/header/Header";

import './Home.css'

//Router import for redirection.
import {Redirect} from 'react-router-dom';

import {
    Avatar,
    Button,
    Card,
    CardContent,
    CardHeader,
    FormControl,
    Input,
    InputLabel
} from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {red} from '@material-ui/core/colors';

class Home extends Component {

    constructor() {
        super();
        this.baseUrl = 'https://api.instagram.com/v1/';
        this.state = {
            profile_picture: '',
            recent_media: null,
            likes: []
        }
    }

    componentDidMount() {
        this.fetchOwnerInfo();
        this.fetchMostRecentMedia();
    }

    render() {
        console.log(this.state.likes)
        console.log(this.state.recent_media)
        if (this.props.location.state === undefined) {
            return <Redirect to='/'/>
        }
        if (this.props.location.state.loginSuccess === true) {
            return <div>
                <div><Header isLoggedIn={true} profilePictureUrl={this.state.profile_picture}/></div>
                <div className='posts-card-container'>
                    {
                        (this.state.recent_media || []).map((details, index) => (
                            <Card key={details.id + '_card'} className='post-card'>
                                <CardHeader avatar={<Avatar src={details.user.profile_picture}/>}
                                            title={details.user.username}
                                            subheader={new Date(details.created_time * 1000).toLocaleString()}/>
                                <CardContent>
                                    <img alt={details.id + '_image'} className='post-image'
                                         src={details.images.standard_resolution.url}/>
                                    <hr className='horizontal-rule'/>
                                    <div className='post-caption'>{details.caption.text.split("\n")[0]}</div>
                                    <div className='post-tags'>
                                        {details.tags.map((tag, index) => (
                                            <span key={index}>{'#' + tag + ' '}</span>)
                                        )}
                                    </div>
                                    <br/>
                                    <div className='likes'>
                                        {
                                            this.state.likes[index] ?
                                                <FavoriteIcon fontSize='default' style={{color: red[500]}}
                                                              onClick={() => this.onFavIconClick(index)}/>
                                                :
                                                <FavoriteBorderIcon fontSize='default'
                                                                    onClick={() => this.onFavIconClick(index)}/>
                                        }

                                        <pre> </pre>
                                        <span>{this.state.likes[index] ? details.likes.count + 1 + ' likes' : details.likes.count + ' likes'}</span>
                                    </div>
                                    <div className='post-comment'>
                                        <FormControl className='post-comment-form-control'>
                                            <InputLabel htmlFor='comment'>Add a comment</InputLabel>
                                            <Input className='comment-input' type='text'></Input>
                                        </FormControl>
                                        <div className='add-button'>
                                            <FormControl>
                                                <Button variant='contained' color='primary'>ADD</Button>
                                            </FormControl>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
        }
    }

    fetchOwnerInfo = () => {
        let data = null;

        let xhr = new XMLHttpRequest();

        let that = this;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({profile_picture: JSON.parse(this.responseText).data.profile_picture});
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
                that.setState({recent_media: JSON.parse(this.responseText).data});
            }
        });

        let url = this.baseUrl + "users/self/media/recent/?access_token=" + sessionStorage.getItem("access-token");

        xhr.open("GET", url);

        xhr.send(data);
    }

    onFavIconClick = (index) => {
        let currentLikes = this.state.likes;
        currentLikes[index] = !currentLikes[index];
        this.setState({'likes': currentLikes})
    }
}

export default Home;