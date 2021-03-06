import * as React from 'react';
import { ETSettings } from '../../../../types/exportTypes';
import styles from './JSON.scss';

export type DataStructureFormat = 'simple' | 'complex';
export type JSONSettings = {
	dataStructureFormat: DataStructureFormat;
};

export const initialState: JSONSettings = {
	dataStructureFormat: 'simple'
};

export const Settings: React.ReactNode = ({ data, id, i18n, onUpdate }: ETSettings) => {
	const onChange = (field: string, value: any): void => {
		onUpdate({
			...data,
			[field]: value
		});
	};
	return (
		<div>
			<div className={styles.structureFormatRow}>
				<label>{i18n.dataStructureFormat}</label>
			</div>

			<div className={styles.settings}>
				<input
					type="radio"
					value="simple"
					id={`${id}-simple`}
					checked={data.dataStructureFormat === 'simple'}
					onChange={(): void => onChange('dataStructureFormat', 'simple')}
				/>
				<label htmlFor={`${id}-simple`}>{i18n.simple}</label>
				<input
					type="radio"
					value="complex"
					id={`${id}-complex`}
					checked={data.dataStructureFormat === 'complex'}
					onChange={(): void => onChange('dataStructureFormat', 'complex')}
				/>
				<label htmlFor={`${id}-complex`}>{i18n.complex}</label>
			</div>
		</div>
	);
};
