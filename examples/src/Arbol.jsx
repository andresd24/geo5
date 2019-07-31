import React, { Component } from "react";
import RadialMenu from "../../src/index";
import {Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';

window.jQuery = window.$ = require("jquery");

const items = [
	{"href":"http://www.facebook.com", "image":"url(images/social/tree_of_life.png)"},
	{"href":"http://www.reddit.com", "image":"url(images/social/seed_of_life.png)"},
	{"href":"http://www.flickr.com", "image":"url(images/social/metatron.png)"},
	{"href":"http://www.google.com", "image":"url(images/social/merkabab_flower.png)"},
	{"href":"http://www.linkedin.com", "image":"url(images/social/chakras.png)"},
	{"href":"http://www.twitter.com", "image":"url(images/social/spiral.png)"},
	{"href":"http://www.twitter.com", "image":"url(images/social/flower.png)"}];

const items3 = [
	{"href":"http://www.facebook.com", "image":"url(images/social/arbol_persona.png)", text:"Arbol - Flor"},
	{"href":"/index", "image":"url(images/social/flo.png)", text:"La Flor"},
	{"href":"/startetra", "image":"url(images/social/kabala.png)", text:"Kabbalah"},
	{"href":"http://www.twitter.com", "image":"url(images/social/tetra_medi.png)", text:"Meditacion"},
	{"href":"http://www.linkedin.com", "image":"url(images/social/tetra_64.png)",  text:"Tetraedro 64"},
	{"href":"http://www.twitter.com", "image":"url(images/social/merkaba.png)", text:"El Merkaba"}];

const center = {
	"image":"url(images/social/tree_of_life.png)"
};

var containers = [];
var container_index = 0;


export default class Arbol extends Component {




    state = {
         animation: "transition.swoopIn",
         duration: 600,
         stagger: 100,
         distance: 30
     }

    state2 = {
         animation2: "transition.swoopIn",
         duration2: 600,
         stagger2: 100,
         distance2: 30
     }

	setAnimation = event => {
		this.setState({animation2: event.target.value});
	}

	setDuration = event => {
		this.setState({duration2: parseInt(event.target.value)});
	}

	setStagger = event => {
		this.setState({stagger2: parseInt(event.target.value)});
	}

    setDistance = event => {
		this.setState({distance2: parseInt(event.target.value)});
	}


  componentDidMount() {

    const node = ReactDOM.findDOMNode(this);
        const ox = [];

    if (node instanceof HTMLElement) {
        ox[container_index++] = node.querySelector('.radial-menu-container');
        console.log(ox[0]);
    }

            if (container_index > 0)
            {
                 console.log("unmounting!!");
                 container_index--;
            }

            ReactDOM.unmountComponentAtNode(node.parentNode);
            container_index--;

            const {
                    animation,
                    duration,
                    stagger,
                    distance
                } = this.state

            ReactDOM.render(<div id="container" style={{ backgroundImage: "url(images/social/space2.jpg)" }}>
                <div id="content" >
                    <RadialMenu  style="{{ display: 'block' }}"
                    items={items3}
                    center={center}
                    animation={animation}
                    duration={duration}
                    stagger={stagger}
                    itemsSize={85}
                    distance={distance}
                /></div>        <div id="bottom_text" >
                <p >Según la tradición hindú, cada ser vivo contiene en él cuerpos energéticos incalculables. Los órganos como las células del cuerpo humano son cuerpos energéticos porque su función es absorber, transmitir y distribuir energía. Sin embargo, es aquí energía cruda o física, considerada como inconsciente, a diferencia de la energía "extramaterial" que es consciente. En general, los denominados cuerpos energéticos sutiles corresponden a órganos invisibles que tienen la capacidad de transformar energía física en energía inmaterial y viceversa, pero también juegan un papel fundamental en la comunicación de energía dentro del cuerpo humano y con el cosmos que lo rodea, entre lo material y lo espiritual.
                </p> </div><div id="text" >
                <p  >El Árbol de la Vida</p></div>
                </div>, document.getElementById('app'));


  }

    componentDidUpdate () {

        const node = ReactDOM.findDOMNode(this);
        if (node instanceof HTMLElement) {
            var ox = node.querySelector('.radial-menu-container');
            console.log(ox);
        }
    }


	render () {
        const {
            animation,
            duration,
            stagger,
            distance
        } = this.state

		return (
	            <RadialMenu  style="{{ display: 'block' }}"
                    items={items3}
                    center={center}
                    animation={animation}
                    duration={duration}
                    stagger={stagger}
                    itemsSize={85}
                    distance={distance}
                />



        )


   }
}

var comp= document.getElementById('content');
console.log(comp);