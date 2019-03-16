import React from 'react';
import { css } from 'glamor';

import Weapon from '../Weapon';

const Player = ({ label, weapon, loading, score, isComplete }) => (
	<div className={styles.player}>
		<div>
			<span className="label">{label}</span>
		</div>
		<Weapon
			icon={isComplete && weapon}
			loading={loading}
		/>
		<div>
			<span className="score">{score} PT{score > 1 && 'S'}</span>
		</div>
	</div>
);

const styles = {
    player : css({
        display: 'inline-block',
		width: '320px',

		'> div': {
			display: 'inline-block',
			fontSize: '14px',
			textAlign: 'center',
			width: '105px',
		},

		'& > span': {
			verticalAlign: 'middle',
		},

		'& .score': {
			border: '1px solid #fff',
			borderRadius: '3px',
			display: 'inline-block',
			minWidth: '60px',
			padding: '4px'
		}
    })
};

export default Player;
