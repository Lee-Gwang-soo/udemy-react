import react, {useState} from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

const options = [
	{
		label: 'The Color Red',
		value: 'red',
	},
	{
		label: 'A shade of Blue',
		value: 'blue',
	},
	{
		label: 'The Color Green',
		value: 'green',
	},
];

function App() {
	const [selected, setSelected] = useState(options[0]);
	return (
		<div className='ui container'>
			<Dropdown
				selected={selected}
				onSelectedChange={setSelected}
				options={options}
			/>
		</div>
	);
}

export default App;
