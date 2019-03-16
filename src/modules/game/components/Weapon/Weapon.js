import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

import Loading from '../Loading';

const Weapon = ({ icon, loading }) => (
	<span
		className={`${styles.weapon} ${!loading && icon ? `fa fa-hand-${icon}-o` : 'empty'}`}
	>
		{!loading && !icon && '?'}
		{loading && <Loading />}
	</span>
);

Weapon.propTypes = {
	/** Icon (rock, paper or scissors) */
	icon: PropTypes.string,

	/** Flag show loading */
	loading: PropTypes.bool,
};

const styles = {
    weapon : css({
			backgroundColor: '#fff',
			border: '2px solid transparent',
			borderRadius: '50%',
			display: 'inline-block',
			color: '#4B6A90',
			fontSize: '60px',
			height: '100px',
			lineHeight: '60px',
			padding: '20px',
			textAlign: 'center',
			width: '100px',

			'&.empty' : {
				backgroundColor: 'transparent',
				border: '2px dashed #fff',
				color: '#fff',
				fontSize: '30px'
			}
    })
};

export default Weapon;
