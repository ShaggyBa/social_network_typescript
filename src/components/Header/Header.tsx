import React from "react"

import "./Header.css"

import { NavLink } from "react-router-dom";

type props = {
	setIsEntered: Function
}

const Header = (props: props) => {
	return (
		<header className={"header"}>
			<div><NavLink to="/*" className={navData => ""} >
				Main
			</NavLink></div>
			<button className="quit" onClick={() => props.setIsEntered(false)}>Выйти</button>
		</header>
	)
}

export default Header