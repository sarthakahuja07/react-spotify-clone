import React from 'react'
import Body from './BodyComponent';
import Footer from './FooterComponent';
import Sidebar from './SidebarComponent';

import '../css/spotifyComponent.css'
function Spotify() {

	return (
		<div className="spotify-container">
			<div className="spotify__body">
				<Sidebar />
				<Body />
			</div>
			<Footer />
		</div>
	)
}

export default Spotify
