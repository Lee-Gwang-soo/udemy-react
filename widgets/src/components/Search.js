import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Search() {
	const [inputText, setInputText] = useState('javascript');
	const [results, setResults] = useState([]);

	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};

	useEffect(
		function () {
			const search = async () => {
				const {data} = await axios.get(
					'https://en.wikipedia.org/w/api.php',
					{
						params: {
							action: 'query',
							list: 'search',
							origin: '*',
							format: 'json',
							srsearch: inputText,
						},
					},
				);
				setResults(data.query.search);
			};

			const timeoutId = setTimeout(() => {
				if (inputText) {
					search();
				}
			}, 2000);

			return () => {
				clearTimeout(timeoutId);
			};
		},
		[inputText],
	);

	const renderedResults = results.map((result) => {
		return (
			<div key={result.pageid} className='item'>
				<div className='right floated content'>
					<a
						className='ui button'
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
					>
						Go
					</a>
				</div>
				<div className='content'>
					<div className='header'>{result.title}</div>
					<span
						dangerouslySetInnerHTML={{__html: result.snippet}}
					></span>
				</div>
			</div>
		);
	});

	const submitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<div className='ui form'>
				<div className='field'>
					<form onSubmit={submitHandler}>
						<label>Search : </label>
						<input
							onChange={inputTextHandler}
							type='text'
							value={inputText}
						/>
					</form>
				</div>
			</div>
			<div className='ui celled list'>{renderedResults}</div>
		</div>
	);
}

export default Search;
