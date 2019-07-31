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

const items2 = [
	{"href":"https://www.facebook.com/groups/1691767504398347/permalink/1894847444090351/", "image":"url(images/social/merkabah.png)", text:"El Merkaba"},
	{"href":"/index", "image":"url(images/social/flo.png)", text:"La Flor"},
	{"href":"http://www.google.com", "image":"url(images/social/merkabab_flower.png)", text:"Flujo Energetico"},
	{"href":"/startetra", "image":"url(images/social/star_tetra.png)", text:"Tetraedro Estelar"},
	{"href":"https://www.youtube.com/watch?v=XyUOgHVsDiY", "image":"url(images/social/tetra_medi.png)", text:"Meditacion"},
	{"href":"http://www.linkedin.com", "image":"url(images/social/tetra_64.png)",  text:"Tetraedro 64"},
	{"href":"http://www.twitter.com", "image":"url(images/social/merkaba.png)", text:"El Merkaba"}];

const center = {
	"image":"url(images/social/metatron.png)"
};

var containers = [];
var container_index = 0;


export default class Tetra extends Component {




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
                    items={items2}
                    center={center}
                    animation={animation}
                    duration={duration}
                    stagger={stagger}
                    itemsSize={85}
                    distance={distance}
                /></div>        <div id="bottom_text" >
                <p >El Star Tetrahedron / Merkaba es una herramienta asombrosa y poderosa,
                especialmente durante estos tiempos actuales de cambios y transiciones.
                Puede ayudar en la conexión entre los cuerpos físicos y etéreos, nos permite ver los
                patrones psicológicos y programas que pueden limitarnos, y es un recordatorio constante para recordar
                nuestra naturaleza verdadera, amorosa y Divina. Meditando en la Merkaba podemos fusionarnos con la Fuente, lo Divino.
                Todo Lo Que Es.
                </p> </div>
                <div id="subtext" ><br></br><br></br>
                <p>Simbolo del Merkaba</p></div>
                <div id="text" >
                <p>Tetrahedron Estelar</p></div>

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
                    items={items2}
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