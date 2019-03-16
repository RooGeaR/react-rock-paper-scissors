import React from 'react';
import { css } from 'glamor';

const Button = ({ children, ...rest }) => (
	<button
		className={styles.button}
		{...rest}
	>
		{children}
	</button>
);

const styles = {
    button : css({
        backgroundColor: '#fff',
		border: 0,
		borderRadius: '5px',
		cursor: 'pointer',
		color: '#27466E',
		padding: '7px 12px',
		':hover': {
			opacity: '0.8'
		},
		':disabled': {
			opacity: '0.5'
		}
    })
};

export default Button;
