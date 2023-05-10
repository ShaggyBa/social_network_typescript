import React from 'react'

import "./Friend.css"

type props = {
	name: string,
	image: string

}

const Friend = (props: props) => {
	return (<div className={"itemList"}>
		<a href="#">
			<div className={"friendImg"}>
				{/*<img src={props.profileImage} alt={"Friend"}/>*/}
			</div>
			<div className={"friendName"}>{props.name}</div>
		</a>
	</div>
	)
}

export default Friend