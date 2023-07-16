import { SyntheticEvent, useState } from 'react';
import { uiTextsRu } from '../../uiTexts/ru';
import { joinGame } from '../../client/wsClient';
import { Form } from '../../styled/Form';
import { Input } from '../../styled/Input';
import { Button } from '../../styled/Button';
import { H2 } from '../../styled/H2';

export function EnterAsSecond() {
	const [name, setName] = useState(uiTextsRu.defaultName2);
	const [code, setCode] = useState('');

	function handle(e: SyntheticEvent) {
		e.preventDefault();
		if (name === '') {
			joinGame(uiTextsRu.defaultName2, code);
		} else {
			joinGame(name, code);
		}
	}

	return (
		<Form>
      <H2>{uiTextsRu.joinGameHeading}</H2>
			<Input
				type='text'
        name='playerName'
				value={name}
				onChange={(e: SyntheticEvent) => setName((e.target as HTMLInputElement).value)}
			/>
			<Input
				type='text'
        name='code'
				placeholder={uiTextsRu.enterAccessCode}
				value={code}
				onChange={(e: SyntheticEvent) => setCode((e.target as HTMLInputElement).value)}
			/>
			<Button onClick={(e: SyntheticEvent) => handle(e)}>{uiTextsRu.enterGame}</Button>
		</Form>
	);
}
