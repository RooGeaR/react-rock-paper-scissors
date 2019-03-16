import React from 'react';
import { css } from 'glamor';
import Button from '../Button';

const Result = ({ winner, player1Label, player2Label, onClickReset, onClickPlay, loading }) => (
	<div className={styles.result}>
		{winner !== null && !loading && (
			<div className="winner">
				<span>
					{winner === 0 ? 'TIE' : `${(winner === 1 ? player1Label : player2Label)} WINS`}
				</span>
			</div>
		)}
		<div className="play">
			<Button
				disabled={loading}
				onClick={onClickPlay}
			>
				PLAY {(loading || winner !== null) && 'AGAIN'}
			</Button>
		</div>
		<div className="reset">
			<Button
				disabled={loading}
				onClick={onClickReset}
			>
				RESET GAME
			</Button>
		</div>
	</div>
);

const styles = {
    result : css({
        alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		height: '160px',
		justifyContent: 'centere',

		'& > div': {
			textAlign: 'center',
		},

		'& .winner': {
			fontWeight: 'bold',
			marginBottom: '40px',
		},

		'& .play': {
			alignSelf: 'center'
		},

		'& .reset': {
			marginTop: '20px'
		}
    })
};

export default Result;
