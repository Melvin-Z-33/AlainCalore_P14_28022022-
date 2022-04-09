import { React, useState } from 'react';
import './modale.css';

export default function Modal(props) {
	const [show, setShow] = useState(false);
	console.log(show);

	function toggleShow() {
		setShow(!show);

		console.log(props.test);
		console.log('er');
	}

	function a(e) {
		props.test(e);
		toggleShow();
	}

	return (
		<div className="modal-content">
			<button className="button-save" onClick={a}>
				save
			</button>
			{show ? (
				<>
					<div className="overlay">
						<div className="wrapper">
							<div className="modal">
								<button type="button" className="close" onClick={toggleShow}>
									<span>&times;</span>
								</button>
								<p>Employee Created!</p>
							</div>
						</div>
					</div>
				</>
			) : null}
		</div>
	);
}
