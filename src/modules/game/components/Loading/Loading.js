import React from 'react';
import { css } from 'glamor';

const Loading = () => (
	<span className={styles.loading} />
);

let spin = css.keyframes({ 
	'0%': { transform: 'rotate(0deg)' },
	'100%': { transform: 'rotate(360deg)' }
})

const styles = {
    loading : css({
        animation: `${spin} 1000ms infinite linear`,
		border: '3px solid #fff',
		borderRadius: '50%',
		borderTopColor: '#4B6A90',
		display: 'inline-block',
		height: '20px',
		width: '20px'
    })
};

export default Loading;
