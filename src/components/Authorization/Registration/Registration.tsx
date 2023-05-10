import React from "react";

import "./Registration.css"


type props = {
	isRegistered: boolean,
	setIsRegistered: Function
}

const link: string = "https://6453d4bce9ac46cedf30f211.mockapi.io/users"

const Registration = (props: props) => {

	const [emailValue, setEmailValue] = React.useState<string>("")
	const [loginValue, setLoginValue] = React.useState<string>("")
	const [passwordValue, setPasswordValue] = React.useState<string>("")

	const [isValidEmail, setIsValidEmail] = React.useState<boolean>(true)
	const [isValidLogin, setIsValidLogin] = React.useState<boolean>(true)
	const [isValidPassword, setIsValidPassword] = React.useState<boolean>(true)


	const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	const LOGIN_REGEXP = /^[a-z][a-z0-9]*?([-_][a-z0-9]+){0,2}$/i
	const PASSWORD_REGEXP = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g

	const onCompleteRegistered = () => {
		if (isValidEmail && isValidLogin && isValidPassword) {
			localStorage.setItem("email", emailValue)
			localStorage.setItem("login", loginValue)
			localStorage.setItem("password", passwordValue)
			props.setIsRegistered(!props.isRegistered)
		}
	}

	return (
		<div className="registration">
			<h2>Авторизация</h2>
			<div>
				{!isValidEmail && <span style={{ "color": "red", "marginRight": "1rem" }}>Некорректно введенный email</span>}
				<input
					type="email"
					onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
						setEmailValue(e.target.value)
						if (!EMAIL_REGEXP.test(e.target.value.toLowerCase()))
							setIsValidEmail(false)
						else
							setIsValidEmail(true)
					}
					}
					placeholder="Email..."
					value={emailValue}
				></input>
			</div>
			<div>
				{!isValidLogin && <span style={{ "color": "red", "marginRight": "1rem" }}>Некорректный логин</span>}
				<input
					type="login"
					onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
						setLoginValue(e.target.value)
						if (!LOGIN_REGEXP.test(e.target.value.toLowerCase()) || loginValue.length < 5)
							setIsValidLogin(false)
						else
							setIsValidLogin(true)
					}

					}
					placeholder="Логин..."
					value={loginValue}
				></input>
			</div>
			<div>
				{!isValidPassword && <span style={{ "color": "red", "marginRight": "1rem" }}>Некорректный пароль</span>}
				<input
					type="password"
					onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
						setPasswordValue(e.target.value)

						if (!PASSWORD_REGEXP.test(e.target.value))
							setIsValidPassword(false)
						else
							setIsValidPassword(true)
					}}
					placeholder="Пароль..."
					value={passwordValue}
				></input>
			</div>
			<button className="btn-registration" onClick={() => onCompleteRegistered()}>Зарегистрироваться</button>
			<button
				className="btn-entry"
				onClick={() => props.setIsRegistered(!props.isRegistered)}
			>Уже зарегистрированы? <span style={{ "color": "red" }}>Войти</span></button>
		</div >

	)
}

export default Registration