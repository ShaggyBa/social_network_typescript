import React from "react"
import "./Profile.css"

import ProfilePosts from "./ProfilePosts/ProfilePosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
	return (
		<div className={"container"}>
			<ProfileInfo />
			<ProfilePosts />

		</div>
	)
}

export default Profile