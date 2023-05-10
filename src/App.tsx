import React from 'react';
import { Link } from 'react-router-dom';
import Main from './components/Main';


export default function App() {

	const [isEntered, setIsEntered] = React.useState(false)
	const [isRegistered, setIsRegistered] = React.useState(false)

	return (
		<div>
			<Main
				isEntered={isEntered}
				setIsEntered={setIsEntered}
				isRegistered={isRegistered}
				setIsRegistered={setIsRegistered}
			/>
			{/* {isEntered && <ul>
				<li><Link to='/*'>Profile</Link></li>
				<li><Link to='/friends'>Friends</Link></li>
				<li><Link to='/posts'>Postline</Link></li>

			</ul>} */}

		</div>
	)
}