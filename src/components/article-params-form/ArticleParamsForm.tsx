import clsx from 'clsx';
import { useState } from 'react';

import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import { Text } from 'components/text';
import { Spacing } from 'components/spacing';
import { Separator } from 'components/separator';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	OptionType,
	defaultArticleState,
	ArticleStateType
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';


type ArticleParamsFormProps = {
	onSubmit: (state: ArticleStateType) => void,
}

export const ArticleParamsForm = ({
	onSubmit
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [state, setState] = useState<ArticleStateType>(defaultArticleState);

	const handleChange = (name: string) => (option: OptionType) => {
		setState({
			...state,
			[name]: option
		});
	};

	const onReset = () => {
		setState(defaultArticleState);
		onSubmit(defaultArticleState);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}
				onClick={(e) => e.stopPropagation()}>
				<form className={styles.form} onReset={onReset}>
					<Text as={"h2"} weight={800} size={31} uppercase>Задайте параметры</Text>
					<Spacing size={50} />
					<Select title="Шрифт" options={fontFamilyOptions} selected={state.fontFamilyOption} onChange={handleChange("fontFamilyOption")} />
					<Spacing size={50} />
					<RadioGroup title="Размер шрифта" name="fontSize" options={fontSizeOptions} selected={state.fontSizeOption} onChange={handleChange("fontSizeOption")} />
					<Spacing size={50} />
					<Select title="Цвет шрифта" options={fontColors} selected={state.fontColor} onChange={handleChange("fontColor")} />
					<Spacing size={50} />
					<Separator />
					<Spacing size={50} />
					<Select title="Цвет фона" options={backgroundColors} selected={state.backgroundColor} onChange={handleChange("backgroundColor")} />
					<Spacing size={50} />
					<Select title="Ширина контента" options={contentWidthArr} selected={state.contentWidth} onChange={handleChange("contentWidth")} />
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='button' onClick={() => onSubmit(state)} />
					</div>
				</form>
			</aside>
		</>
	);
};
