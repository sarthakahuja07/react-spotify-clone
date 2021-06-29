import React from 'react'
import Body from './BodyComponent';
import Footer from './FooterComponent';
import Sidebar from './SidebarComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import '../css/spotifyComponent.css'
function Spotify(props) {
	function body_comp(){
		return(
			<Body spotifyAPI={props.spotifyAPI}/>
		)
	}
	function home_comp(){
		return(
			<Home spotifyAPI={props.spotifyAPI}/>
		)
	}

	return (
		<div className="spotify-container">
			<div className="spotify__body">
				<Sidebar />
				<Switch>
					<Route path="/playlist/:playlistID" component={()=>body_comp()}></Route>
					<Route path='/home' component={()=>home_comp()}></Route>
					<Redirect to='/home' ></Redirect>
				</Switch>
			</div>
			<Footer spotifyAPI={props.spotifyAPI} />
		</div>
	)
}

export default Spotify
