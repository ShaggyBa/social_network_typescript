import React from "react";
import "./Authorization.css"
import Entry from "./Entry/Entry";
import Registration from "./Registration/Registration";

type props = {
	isEntered: boolean,
	setIsEntered: Function,

	isRegistered: boolean,
	setIsRegistered: Function
}


const Authorization = (props: props) => {

	return (
		<div className="Authorization">
			{
				!props.isRegistered
					? <Registration

						isRegistered={props.isRegistered}
						setIsRegistered={props.setIsRegistered}
					/>

					: <Entry
						isEntered={props.isEntered}
						setIsEntered={props.setIsEntered}
						setIsRegistered={props.setIsRegistered}
					/>
			}
		</div>

	)
}

export default Authorization