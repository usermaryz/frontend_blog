import { useState } from 'react';
import clsx from 'clsx';
import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

export type OnClick = () => void;
type ArrowButtonProps = {
	isOpen: boolean,
	onClick: OnClick,
}

export const ArrowButton = (props: ArrowButtonProps) => {
	return (
		<div
			role='button'
			aria-label={props.isOpen ? 'Закрыть форму параметров статьи' : 'Открыть форму параметров статьи'}
			tabIndex={0}
			className={clsx(styles.container, { [styles.container_open]: props.isOpen })}
			onClick={props.onClick}
		>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={`${styles.arrow} ${props.isOpen && styles.arrow_open}`}
			/>
		</div>
	);
};
