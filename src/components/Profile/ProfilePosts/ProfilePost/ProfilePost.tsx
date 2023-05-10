import React from "react"
import "./ProfilePost.css"

type props = {
	post__authorImage: string,
	post__authorName: string,
	post__text: string,
	post__images: string,
	post__likes: number
}


const Post = (props: props) => {
	return (
		<div className={"item"}>
			<div className={"user__info"}>
				<img src={props.post__authorImage} alt={""} />
				{props.post__authorName}

			</div>
			<div className={"post__text"}>{props.post__text}</div>
			<div className={"images"}><img src={props.post__images} alt={""} /></div>
			<div className={"likes"}>Likes: {props.post__likes}</div>
		</div>
	)
}

export default Post