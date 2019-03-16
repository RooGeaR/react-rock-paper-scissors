import React, { Component } from 'react';
import { css } from 'glamor';
import Modes from '../Modes';
import Challenge from '../Challenge';
import WeaponList from '../WeaponList';
import Result from '../Result';
import { WEAPONKEYS, MODEKEYS, MODES, WEAPONS } from '../../constants';
import { join, chooseWeapon, play, result, showResult, restartUser, restartGame } from '../../../../api';

export const getRandomWeapon = () => {
	return WEAPONKEYS[WEAPONKEYS.length * Math.random() << 0];
};

export const getWinner = (weapon1, weapon2) => {
	if (weapon1 === weapon2) return 0;
	return WEAPONS[weapon1].wins.some(wins => wins === weapon2) ? 1 : 2;
}

class Game extends Component {

	constructor(props) {
		super(props);

		// Handling player

		join();

		chooseWeapon((err, choosenWeapon) => {
			props.setPlayerOne(choosenWeapon, false);
			props.setIsPlaying(false);
		});

		showResult(() => {
			this.setResult();
		});

		restartGame(() => {
			props.restart();
		});
	}

	/**
	 * Play a round
	 * @param weapon When passed, will be used as Player 2 weapon. Otherwise, will generate a random weapon
	 */
	play(weapon) {
		const { mode, setPlayerOne, setPlayerTwo, isPlaying } = this.props;

		const weapon2 = weapon || getRandomWeapon();
		const simulateMode = mode === MODEKEYS[1];
		
		setPlayerTwo(weapon2, simulateMode ? true : false);

		if (mode !== MODEKEYS[2]) {
			const weapon1 = getRandomWeapon();
			setPlayerOne(weapon1, true);
			// Update result after some delay
			setTimeout(() => {
				this.setResult();
			}, 500 + Math.random() * 500)
		} else {
			play(weapon2);
			if (!isPlaying) {
				// Emit result to indicate choose winner
				result();
				// Update result after some delay
				setTimeout(() => {
					this.setResult();
				}, 500 + Math.random() * 500)
			}
		}
	}

	/**
	 * Determine the winner and set the result in the state
	 */
	setResult() {
		const { player1, player2, setScoreWinner } = this.props;

		const winner = getWinner(player1.weapon, player2.weapon);

		setScoreWinner(winner);
	}

	render() {
		const {
			mode,
			player1,
			player2,
			changeMode,
			restart,
			reset,
			winner,
			isComplete
		} = this.props;

		const { player1Label, player2Label } = MODES[mode];

		const loading = (player1.loading || player2.loading);

		return (
			<div className={styles.game}>
				<h1>
					ROCK, PAPER, SCISSORS
				</h1>

				<div className="modes">
					<Modes
						onClickMode={() => changeMode()}
						label={MODES[mode].label}
					/>
				</div>

				<div className="challenge">
					<Challenge
						player1={{ ...player1, label: player1Label }}
						player2={{ ...player2, label: player2Label }}
						isComplete={isComplete}
					/>
				</div>

				<div className="footer">
					{winner === null && !loading && (mode === MODEKEYS[0] || mode === MODEKEYS[2]) && (
						<WeaponList
							weapons={WEAPONKEYS}
							onClickWeapon={weapon => this.play(weapon)}
						/>
					)}

					{(winner !== null || loading || mode === MODEKEYS[1]) && (
						<Result
							player1Label={player1Label}
							player2Label={player2Label}
							winner={winner}
							loading={loading}
							onClickReset={() => reset()}
							onClickPlay={() => {
									if (mode === MODEKEYS[0]) {
										restart();
									}

									if (mode === MODEKEYS[1]) {
										this.play();
									}

									if (mode === MODEKEYS[2]) {
										restart();
										restartUser();
									}

								}
							}
						/>
					)}
				</div>
			</div>
		);
	}
}

const styles = {
	game: css({
		border: 0,
		minWidth: '320px',

		'& h1': {
			backgroundColor: '#152a43',
			fontSize: '20px',
			margin: '0 0 10px',
			padding: '20px',
			textAlign: 'center',
		},

		'& .modes': {
			margin: '20px 0',
		},

		'& .challenge > div': {
			margin: '0 auto',
		},

		'& .footer': {
			backgroundColor: '#4B6A90',
			marginTop: '20px',
			padding: '10px',
		}
	})
};

export default Game;
