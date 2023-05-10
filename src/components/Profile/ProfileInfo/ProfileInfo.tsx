import React from "react"
import "./ProfileInfo.css"
import ProfileInfoData from "./ProfileInfoData/ProfileInfoData"

const ProfileInfo = () => {
	if (ProfileInfoData[Number(localStorage.getItem("id"))]) {
		const data = ProfileInfoData[Number(localStorage.getItem("id"))]
		return (
			<div className={"user__profile"}>
				<div className={"user__img"}>
					<img src={data.user__img} alt="изображение профиля" />
				</div>

				<div className={"user__name"}>{data.user__name}</div>
				<div className={"user__status"}>{data.user__status}</div>
				<div className={"user__info"}>{data.user__info}</div>
			</div>
		)
	}
	else
		return (
			<div className={"user__profile"}>
				<div className={"user__img"}>
					<img src={"https://images.wallpaperscraft.ru/image/single/seryj_tsvet_fon_145047_1280x720.jpg"} />
				</div>

				<div className={"user__name"}>{localStorage.getItem("login")}</div>
				<div className={"user__status"}>Нет статуса</div>
				<div className={"user__info"}>...</div>
			</div>
		)
}

export default ProfileInfo