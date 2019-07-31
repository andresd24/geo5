import React, { Component } from "react";
import RadialMenu from "../../src/index";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';

const items = [
	{"href":"http://www.facebook.com", "image":"url(images/social/tree_of_life.png)"},
	{"href":"http://www.reddit.com", "image":"url(images/social/seed_of_life.png)"},
	{"href":"http://www.flickr.com", "image":"url(images/social/metatron.png)"},
	{"href":"http://www.google.com", "image":"url(images/social/merkabab_flower.png)"},
	{"href":"http://www.linkedin.com", "image":"url(images/social/chakras.png)"},
	{"href":"http://www.twitter.com", "image":"url(images/social/spiral.png)"},
	{"href":"http://www.twitter.com", "image":"url(images/social/flower.png)"}];

const center = {
	"image":"url(images/social/flo.png)"
};

export default class Users extends Component {
    state = {
         animation: "transition.swoopIn",
         duration: 600,
         stagger: 100,
         distance: 30
     }

	setAnimation = event => {
		this.setState({animation: event.target.value});
	}

	setDuration = event => {
		this.setState({duration: parseInt(event.target.value)});
	}

	setStagger = event => {
		this.setState({stagger: parseInt(event.target.value)});
	}

    setDistance = event => {
		this.setState({distance: parseInt(event.target.value)});
	}

	render () {

        const {
            animation,
            duration,
            stagger,
            distance
        } = this.state

		return (
		    <h1>hello</h1>
		)

   }
}
