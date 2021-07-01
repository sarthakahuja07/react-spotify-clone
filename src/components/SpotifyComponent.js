import React from 'react'
import Body from './BodyComponent';
import Footer from './FooterComponent';
import Sidebar from './SidebarComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../css/spotifyComponent.css'
function Spotify(props) {
	function body_comp(){
		return(
			<Body spotifyAPI={props.spotifyAPI} isHome={false}/>
		)
	}
	function home_comp(){
		return(
			<Body spotifyAPI={props.spotifyAPI} isHome={true}/>
		)
	}

	return (
		<div className="spotify-container">
			<div className="spotify__body">
				<Sidebar />
				<Switch>
					<Route exact path="/playlist/:playlistID" component={()=>body_comp()}></Route>
					<Route path='/playlist/:playlistID' component={()=>home_comp()}></Route>
					<Redirect to='playlist/0' ></Redirect>
				</Switch>
			</div>
			<Footer spotifyAPI={props.spotifyAPI} />
		</div>
	)
}

export default Spotify
