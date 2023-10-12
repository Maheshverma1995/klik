import React, { useState } from 'react'; 

function Pop() { 
	const [isButtonDisabled, setButtonDisabled] = useState(false); 

	const disableButton = () => { 
		setButtonDisabled(true); 
		alert("Button has been disabled!"); 
	}; 

	const enableButton = () => { 
		setButtonDisabled(false); 
		alert("Button has been enabled!"); 
	}; 

	return ( 
		<div style={styles.container}> 
			<h1 style={styles.heading}>Geekforgeeks</h1> 
			<button 
				onClick={disableButton} 
				style={isButtonDisabled ? 
					styles.disabledButton : styles.enabledButton} 
				disabled={isButtonDisabled} 
			> 
				Disable 
			</button> 
			<button 
				onClick={enableButton} 
				style={!isButtonDisabled ? 
					styles.disabledButton : styles.enabledButton} 
				disabled={!isButtonDisabled} 
			> 
				Enable 
			</button> 
		</div> 
	); 
} 

export default Pop; 

const styles = { 
	container: { 
		textAlign: 'center', 
		margin: 'auto', 
		padding: '20px', 
		width: 400, 
	}, 
	heading: { 
		fontSize: '34px', 
		marginBottom: '10px', 
		color: "green", 
		borderBottom: "3px solid green", 
		paddingBottom: 20, 
		borderRadius: "8px", 
	}, 
	disabledButton: { 
		backgroundColor: 'gray', 
		color: 'white', 
		cursor: 'not-allowed', 
		margin: 10, 
		padding: 15, 
		borderRadius: "8px", 
		border: "none", 
		boxShadow: "0px 0px 10px 0px grey", 
	}, 
	enabledButton: { 
		backgroundColor: 'red', 
		color: 'white', 
		cursor: 'pointer', 
		margin: 10, 
		padding: 15, 
		borderRadius: "8px", 
		border: "none", 
		boxShadow: "0px 0px 10px 0px grey", 
	}, 
};
