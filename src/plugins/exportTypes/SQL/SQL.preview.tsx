import * as React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { ETPreviewProps } from '../../../../types/exportTypes';
import { generateMySQL, generatePostgres, generateSQLite, generateOracle, generateMSSQL } from './SQL.generator';

// TODO maybe provide these in the config definition & move codemirror/SyntaxHighlighter completely to the root?
// --- I guess the build would handle the importing of the CSS
require('codemirror/mode/sql/sql');


const Preview = ({ data, theme, exportTypeSettings, showRowNumbers, enableLineWrapping }: ETPreviewProps): JSX.Element | null => {
	const [code, setCode] = React.useState('');

	React.useEffect(() => {
		let content = '';
		if (exportTypeSettings.databaseType === 'MySQL') {
			content = generateMySQL(data, exportTypeSettings);
		} else if (exportTypeSettings.databaseType === 'Postgres') {
			content = generatePostgres(data, exportTypeSettings);
		} else if (exportTypeSettings.databaseType === 'SQLite') {
			content = generateSQLite(data, exportTypeSettings);
		} else if (exportTypeSettings.databaseType === 'Oracle') {
			content = generateOracle(data, exportTypeSettings);
		} else if (exportTypeSettings.databaseType === 'MSSQL') {
			content = generateMSSQL(data, exportTypeSettings);
		}
		setCode(content);
	}, [data, setCode, exportTypeSettings]);

	if (!data.rows.length) {
		return null;
	}

	return (
		<CodeMirror
			value={code}
			onBeforeChange={(value): void => {
				setCode(value);
			}}
			options={{
				mode: 'sql',
				theme,
				lineNumbers: showRowNumbers,
				lineWrapping: enableLineWrapping,
				readOnly: true
			}}
		/>
	);
};

export default Preview;
