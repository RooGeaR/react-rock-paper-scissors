import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import Button from '../Button';

const Modes = ({ label, onClickMode }) => (
	<div className={styles.modes}>
		<span className="label">{label}</span><br />
		<Button
			onClick={onClickMode}
		>
			CHANGE MODE
		</Button>
	</div>
);

const styles = {
    modes : css({
        textAlign: 'center',
		padding: '10px',

		'& button': {
			fontSize: '12px',
			marginTop: '10px',
			padding: '4px 7px'
		}
    })
};


Modes.propTypes = {
	/** Mode label */
	label: PropTypes.string.isRequired,

	/** Function for change mode */
	onClickMode: PropTypes.func.isRequired,
};

export default Modes;
