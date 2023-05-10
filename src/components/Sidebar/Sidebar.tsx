import React from "react"

import "./Sidebar.css"


import { NavLink } from "react-router-dom";

import Friend from "./Friend/Friend";
import friendsData from "./data/FriendsData";

const Sidebar = () => {

	const friendsList = friendsData.map(
		(friend, index) => <Friend key={index} name={friend.name} image={friend.profileImage} />)

	return (
		<div className={"sidebar"}>
			<nav className={"nav"}>
				<span><NavLink to="/profile"
					className={navData => navData.isActive ? "active" : "sidebar__link"}>
					Профиль
				</NavLink>
				</span>
				<span><NavLink to="/Postline/*"
					className={navData => navData.isActive ? "active" : "sidebar__link"}>
					Лента
				</NavLink></span>
				<span><NavLink to="/friends/*"
					className={navData => navData.isActive ? "active" : "sidebar__link"}>
					Друзья
				</NavLink></span>


			</nav>
			<div className={"windowFriends"}>
				<span>Друзья</span>
				<div className={"friendsList"}>
					{friendsList}
				</div>
			</div>
		</div>
	)
}

export default Sidebar