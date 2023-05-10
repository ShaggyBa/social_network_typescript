import React from "react"
import { Routes, Route } from 'react-router-dom';
import Authorization from './Authorization/Authorization';
import Friends from './Friends/Friends';
import Postline from './Postline/Postline';
import Profile from './Profile/Profile';

import "./Main.css"
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

type properties = {
	isEntered: boolean,
	setIsEntered: Function,

	isRegistered: boolean,
	setIsRegistered: Function
}
const Main = (props: properties) => {


	return (

		<div className="app-wrapper">
			<div className="container">
				<Header setIsEntered={props.setIsEntered} />
				<Sidebar />
				<div className={"app-wrapper-content"}>
					{props.isEntered
						? <Routes>
							<Route path="/*" element={
								<Profile />} />
							<Route path="/friends/*" element={
								<Friends />} />
							<Route path="/posts" element={
								<Postline />} />

						</Routes>
						: <Routes><Route path='/*' element={<Authorization
							isEntered={props.isEntered}
							setIsEntered={props.setIsEntered}
							isRegistered={props.isRegistered}
							setIsRegistered={props.setIsRegistered} />} />
						</Routes>
					}
				</div>
			</div>
		</div>


	);
}
export default Main;