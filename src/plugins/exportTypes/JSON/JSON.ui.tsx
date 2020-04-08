import * as React from 'react';
import { ETSettings } from '../../../../types/exportTypes';

export type DataStructureFormat = 'simple' | 'complex';
export type JSONSettings = {
	dataStructureFormat: DataStructureFormat;
};

export const initialState: JSONSettings = {
	dataStructureFormat: 'simple'
};

export const Settings: React.ReactNode = ({ data, i18n, onUpdate, id }: ETSettings) => {
	const onChange = (field: string, value: any): void => {
		onUpdate({
			...data,
			[field]: value
		});
	};

	return (
		<>
			<div>
				<span style={{ marginRight: 10 }}>{i18n.dataStructureFormat}</span>
				<input type="radio" name="dataStructureFormat" value="simple" id={`${id}-simple`}
					   checked={data.dataStructureFormat === 'simple'}
					   onChange={(e): void => onChange('dataStructureFormat', e.target.value)} />
				<label htmlFor={`${id}-simple`} style={{ marginRight: 10 }}>{i18n.simple}</label>

				<input type="radio" name="dataStructureFormat" value="complex" id={`${id}-complex`}
					checked={data.dataStructureFormat === 'complex'}
					onChange={(e): void => onChange('dataStructureFormat', e.target.value)} />
				<label htmlFor={`${id}-complex`}>{i18n.complex}</label>
			</div>
		</>
	);
};
