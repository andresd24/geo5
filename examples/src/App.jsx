import React, { Component } from "react";
import RadialMenu from "../../src/index";
import { Route, Switch, Router, browserHistory } from 'react-router-dom'
import { createBrowserHistory } from 'history';
//import HomePage from './pages/HomePage'
import Users from './Users'
import Tetra from "./Tetra"
import StarTetra from "./StarTetra"
import Chakras from "./Chakras"
import Arbol from "./Arbol"
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';


const items = [
	{"href":"/arbol", "image":"url(images/social/tree_of_life.png)", text:"El Árbol"},
	{"href":"http://www.reddit.com", "image":"url(images/social/seed_of_life.png)", text:"La Semilla"},
	{"href":"/tetra", "image":"url(images/social/metatron.png)", text:"Tetraedro Estelar"},
	{"href":"http://www.google.com", "image":"url(images/social/merkabab_flower.png)", text:"El Tetraedro"},
	{"href":"/chakras", "image":"url(images/social/chakras.png)", text:"Los Chakras"},
	{"href":"http://www.twitter.com", "image":"url(images/social/spiral.png)", text:"El Espiral"},
	{"href":"/index.html", "image":"url(images/social/flower.png)", text:"Terapias"}];



const center = {
	"image":"url(images/social/flo.png)"
};

var flag_primera = true;

const items2 = [
	{"href":"http://www.facebook.com", "image":"url(images/social/tree_of_life.png)"},
	{"href":"http://www.reddit.com", "image":"url(images/social/star_tetra.png)"},
	{"href":"http://www.flickr.com", "image":"url(images/social/tree_of_life.png)"},
	{"href":"http://www.google.com", "image":"url(images/social/tree_of_life.png)"},
	{"href":"http://www.linkedin.com", "image":"url(images/social/tree_of_life.png)"},
	{"href":"http://www.twitter.com", "image":"url(images/social/tree_of_life.png)"},
	{"href":"http://www.twitter.com", "image":"url(images/social/tree_of_life.png)"}];

const center2 = {
	"image":"url(images/social/metatron.png)"
};

var containers = [];
var container_index = 0;

const newHistory = createBrowserHistory();

export default class App extends Component {

    hide_state = { showing: true };

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



  componentDidMount() {
    console.log("calling did mount");
    const ox = [];
    const node = ReactDOM.findDOMNode(this);
    if (node instanceof HTMLElement) {
         ox[container_index++] = node.querySelector('.radial-menu-container');
        console.log([container_index]);

        if (container_index > 0 && flag_primera == false)
        {
                    console.log("unmounting!");
                    console.log(ox[0]);

            ReactDOM.unmountComponentAtNode(node.parentNode);
            container_index--;

          const { showing } = this.state;
            const {
                animation,
                duration,
                stagger,
                distance
            } = this.state

            ReactDOM.render(
               <div id="container" style={{ backgroundImage: "url(images/social/space2.jpg)" }}>
                 <div id="content"  >
                    <RadialMenu  style="{{ display: 'block' }}"
                    items={items2}
                    center={center2}
                    animation={animation}
                    duration={duration}
                    stagger={stagger}
                    itemsSize={85}
                    distance={distance}
                />
                </div></div>, document.getElementById('app'));
            }



    }
  }

    componentDidUpdate () {

        const node = ReactDOM.findDOMNode(this);
        if (node instanceof HTMLElement) {
            var ox = node.querySelector('.radial-menu-container');
            console.log(ox);
            containers[container_index++] = ox;
        }
    }



  componentWillUnmount() {
        let node = ReactDOM.findDOMNode(this);
        if (node instanceof HTMLElement) {
            var ox = node.querySelector('.radial-menu-container');
            console.log("unmounting");

        }

    }

	render () {
	    flag_primera = true;

        const { showing } = this.state;
        const {
            animation,
            duration,
            stagger,
            distance
        } = this.state


		return (
		<div id="container" >
		<Router history={newHistory}>
	    <div id="content"  name="content1"  >
	            <RadialMenu name="content1" style={{ display: (showing ? 'none' : 'block') }}
                    items={items}
                    center={center}
                    animation={animation}
                    duration={duration}
                    stagger={stagger}
                    itemsSize={85}
                    distance={distance}
                />
                <br></br>
    	<Switch>
        <Route path="/d" component={Users} />
        <Route exact path="/tetra" component={Tetra} />
        <Route path="/chakras" component={Chakras} />
        <Route path="/arbol" component={Arbol} />
        <Route path="/startetra" component={StarTetra} />
        </Switch>

        </div>
            </Router>

        <div id="bottom_text">
<p > Llegar a encontrarnos con el conocimiento de la Flor de la Vida y sus secretos ocultos es un gran privilegio ya que
segun expertos tiene todo el conocimiento del Universo contenido en su gemotería. Para algunos puede ser rápido y fortiuto per usualmente
 requiere de años de haber explorado differents tipos de intelecto, meditación,
conexión y espiritualidad.

</p>
        </div>
        <div id="text">
<p >La Flor de La Vida</p>
        </div>
		</div>)

        flag_primera = false;
   }


}

