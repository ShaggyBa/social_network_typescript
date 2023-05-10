import React from "react";

import "./Entry.css"

type props = {
	isEntered: boolean,
	setIsEntered: Function,
	setIsRegistered: Function
}

type user = {
	id: number,
	login: string,
	password: string
}

const link: string = "https://6453d4bce9ac46cedf30f211.mockapi.io/users"

const Entry = (props: props) => {


	const [loginValue, setLoginValue] = React.useState<string>("")
	const [passwordValue, setPasswordValue] = React.useState<string>("")

	const [isValidLogin, setIsValidLogin] = React.useState<boolean>(true)


	const rememberLogin = localStorage.getItem("login")
	const rememberPassword = localStorage.getItem("password")

	const onCompleteEnter = () => {
		if (rememberLogin === loginValue && rememberPassword === passwordValue) {
			props.setIsEntered(!props.isEntered)
			return
		}

		fetch(link).then((res) => {
			return res.json()
		})
			.then(data => {
				console.log(data)
				data.map((user: user, index: Number) => {
					if (user.login === loginValue && user.password === passwordValue)
						props.setIsEntered(!props.isEntered)
					localStorage.setItem("id", String(user.id))

				})
			}).then(() => {
				if (!props.isEntered)
					setIsValidLogin(false)
				else
					setIsValidLogin(true)
			})


	}

	return (
		<div className="entry">
			<h2>Вход</h2>
			{!isValidLogin && <p style={{ "color": "red" }}>Некорректный логин или пароль</p>}

			<div>
				<input
					type="login"
					onInput={(e: React.ChangeEvent<HTMLInputElement>) => setLoginValue(e.target.value)}
					placeholder="Логин..."
				></input>
			</div>
			<div>
				<input
					type="password"
					onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordValue(e.target.value)}
					placeholder="Пароль..."
				></input>
			</div>
			<div><button className="btn-entry" onClick={() => onCompleteEnter()}>Войти</button></div>

			<div><button className="btn-registration" onClick={() => props.setIsRegistered(false)}>Не зарегистрированы?</button></div>
		</div>
	)
}

export default Entry