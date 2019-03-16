import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import Button from '../Button';
import Weapon from '../Weapon';

const WeaponList = ({ weapons, onClickWeapon }) => (
	<div className={styles.weaponList}>
		<ul>
			{weapons.map(weapon => (
				<li key={weapon}>
					<Button
						onClick={() => onClickWeapon(weapon)}
						id={`${weapon}Weapon`}
					>
						<Weapon
							icon={weapon}
						/>
					</Button>
				</li>
			))}
		</ul>
		<span className="label">CHOOSE A WEAPON</span>
	</div>
);

Weapon.propTypes = {
	/** List of weapons */
	weapons: PropTypes.array,

	/** Function click weapon */
	onClickWeapon: PropTypes.func,
};

const styles = {
    weaponList : css({
			height: '160px',
			textAlign: 'center',

			'& ul': {
				listStyleType: 'none',
				margin: 0,
				padding: 0,
			},

			'& li': {
				display: 'inline-block',
			},

			'& button': {
				background: 'transparent',
				height: '120px',
				padding: 0,
				width: '120px',
			},

			'& .label': {
				display: 'inline-block',
				fontSize: '12px',
				margin: '10px 0'
			}
    })
};

export default WeaponList;
