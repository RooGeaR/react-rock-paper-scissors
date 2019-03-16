export const NAME = `game`;

export const WEAPONS = {
	rock: {
		wins: ['scissors'],
	},
	paper: {
		wins: ['rock'],
	},
	scissors: {
		wins: ['paper'],
	},
};

export const MODES = {
	pve: {
		label: 'PLAYER VS COMPUTER',
		player1Label: 'COMPUTER',
		player2Label: 'PLAYER',
	},
	simulate: {
		label: 'COMPUTER VS COMPUTER',
		player1Label: 'COMPUTER 1',
		player2Label: 'COMPUTER 2',
	},
	pvp: {
		label: 'PLAYER VS PLAYER',
		player1Label: 'PLAYER 1',
		player2Label: 'PLAYER 2',
	},
};

export const MODEKEYS = Object.keys(MODES);
export const WEAPONKEYS = Object.keys(WEAPONS);