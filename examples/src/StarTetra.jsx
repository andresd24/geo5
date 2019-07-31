import React, { Component } from "react";
import RadialMenu from "../../src/index";
import {Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';

window.jQuery = window.$ = require("jquery");

const items = [];

const center = {
	"image":"url(images/social/star_tetra.png)"
};
var containers = [];
var container_index = 0;

export default class StarTetra extends Component {

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



            ReactDOM.render(<div id="container" style={{ backgroundImage: "url(images/social/space2.jpg)" }}>
                <div id="content2" >
                    <RadialMenu  style="{{ display: 'block' }}"
                    items={items}
                    center={center}
                /></div>        <div id="bottom_text" >
                <p style={{ color:'white'}} >El tetrahedron es de suma importancia en la geometría sagrada ya que la combination the dos tetrahedrons estrella. una apuntando a los cielos, canalizando energia hacia abajo desde el Universo al plano terrestre,
                y uno apuntando hacia abajo recibiendo energia de la tierra son las dos figuras básicas del Merkaba, simbolo de gran importancia, que ya explicaremos más adelante.
                </p> </div><div id="text" >
                <p  >El Tetrahedron Estrella</p></div>
                </div>, document.getElementById('app'));


  }

	render () {

		return (
	            <RadialMenu  style="{{ display: 'block' }}"
	                items={items}
                    center={center}
                />



        )


   }


}