import React from 'react';
import { css } from 'glamor';
import Player from '../Player/Player';

const Challenge = ({ player1, player2, isComplete }) => (
	<div className={styles.challenge}>
		<Player
			isComplete={isComplete}
			{...player1}
		/>
		<span className="vs">vs</span>
		<Player
			isComplete={isComplete}
			{...player2}
		/>
	</div>
)

const styles = {
    challenge : css({
        padding: '20px 0',
		textAlign: 'center',
		width: '320px',

		'& .vs': {
			display: 'inline-block',
			fontWeight: 'bold',
			margin: '20px',
		}
    })
};

	
export default Challenge;
