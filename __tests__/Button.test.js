import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/ui-toolkit/Button';
import { ButtonType } from '../src/utils/Constants';

test('render LARGE PRIMARY Button component', () => {
	const tree = renderer
		.create(<Button type={ButtonType.LARGE_PRIMARY} />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

test('render PRIMARY Button component', () => {
	const tree = renderer.create(<Button type={ButtonType.PRIMARY} />).toJSON();
	expect(tree).toMatchSnapshot();
});

test('render SECONDARY Button component', () => {
	const tree = renderer.create(<Button type={ButtonType.SECONDARY} />).toJSON();
	expect(tree).toMatchSnapshot();
});

test('render LARGE SECONDARY Button component', () => {
	const tree = renderer
		.create(<Button type={ButtonType.LARGE_SECONDARY} />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

test('render LINK Button component', () => {
	const tree = renderer.create(<Button type={ButtonType.LINK} />).toJSON();
	expect(tree).toMatchSnapshot();
});
