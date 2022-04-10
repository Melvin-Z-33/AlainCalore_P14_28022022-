import { React, useState } from 'react';
import './modale.css';

/**
 * @return  Modal component
 * @param {function} props.secondFunction - allows you to add a function to be executed when the modal is opened
 * @param {string} props.buttonText - allows to change the text of the modal button
 * @param {string} props.modalText - allows to change the text of the modal
 */

export default function Modal(props) {
	const [show, setShow] = useState(false);

	function toggleShow() {
		setShow(!show);
	}

	function doubleFunction(e) {
		props.secondFunction(e);
		toggleShow();
	}

	return (
		<div className="modal-content">
			<button className="button-save" onClick={doubleFunction}>
				{props.buttonText}
			</button>
			{show ? (
				<>
					<div className="overlay">
						<div className="wrapper">
							<div className="modal">
								<button type="button" className="close" onClick={toggleShow}>
									<span>&times;</span>
								</button>
								<p>{props.modalText}</p>
							</div>
						</div>
					</div>
				</>
			) : null}
		</div>
	);
}
