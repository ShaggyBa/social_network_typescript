import React, { createRef } from "react"
import "./ProfilePosts.css"

import Post from "./ProfilePost/ProfilePost"
import postsData from "./ProfilePost/ProfilePostsData/ProfilePostsData"


const ProfileProps = () => {

	const [textAreaValue, setTextAreaValue] = React.useState<string>("")

	const getData = postsData.map((post, index) => {
		return <Post
			key={index}
			post__authorName={post.post__authorName}
			post__authorImage={post.post__authorImage}
			post__text={post.post__text}
			post__images={post.post__images}
			post__likes={post.post__likes} />
	})


	const onAddPost = () => {
		const newPost = { //Создание нового поста
			id: postsData.length + 1,
			post__authorName: "ShaggyBa",
			post__authorImage: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80",
			post__text: textAreaValue,
			post__likes: 0,
			post__images: ""
		}
		postsData.push(newPost)
	}


	return (
		<div className={"container"}>
			<div className={"my__posts"}>
				My Posts
				<div className={"new__posts"}>
					<textarea className={"btnTextArea"}
						onChange={(e) => setTextAreaValue(e.target.value)}
						value={textAreaValue} />
					<button className={"btnAdd"} onClick={onAddPost}>Add</button>
				</div>
				<div className={"posts"}>
					{getData}
				</div>
			</div>
		</div>
	)
}

export default ProfileProps