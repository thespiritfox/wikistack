import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core'

import '../../css-components/Navbar.css'

import grey from '@material-ui/core/colors/grey';

import Logo from '../../../public/logo.png';

const useStyles = makeStyles(theme => ({
	icon: {
		"& :hover": {color: grey[50]}
	}
}))

export function Navbar() {
	const classes = useStyles()
	return (
		<div className="navbar">
			<Link to="/">
				{/* <img src={Logo} alt="Shinflik logo" className="navLogo" /> */}
			</Link>
			<Link to="/" className="barLink">
				HOME
			</Link>
			<Link to="#" className="barLink">
				MY FLIKS
			</Link>
			<Link to="#" className="barLink">
				DISCOVER
			</Link>
			<Link to="#" className="barLink">
				SHOWCASE
			</Link>
			<Link to="#" className="barLink">
				PREMIERES
			</Link>
			<div className="searchIcon">
				<SearchIcon
					style={{
						fontSize: 50,
						color: grey[500],
						'&:hover': {
							color: grey[50]
						}
					}}
					className={classes.icon}
				/>
			</div>
			<Link to="#" className="barLink2">
				ABOUT
			</Link>
			<Link to="#" className="barLink2">
				FILMMAKERS
			</Link>
			<Link to="/login" className="barLink2">
				LOGIN
			</Link>
			<Link to="/signup" className="barLink2">
				SIGN UP
			</Link>
		</div>
	);
}


// /**
//  * CONTAINER
//  */
// const mapState = state => {
// 	return {
// 	  isLoggedIn: !!state.user.id
// 	}
//   }
  
//   const mapDispatch = dispatch => {
// 	return {
// 	  handleClick() {
// 		dispatch(logout())
// 	  }
// 	}
//   }
  
//   export default connect(mapState, mapDispatch)(Navbar)
  
//   /**
//    * PROP TYPES
//    */
//   Navbar.propTypes = {
// 	handleClick: PropTypes.func.isRequired,
// 	isLoggedIn: PropTypes.bool.isRequired
//   }
  