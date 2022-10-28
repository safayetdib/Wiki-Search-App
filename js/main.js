import {
	setSearchFocus,
	showClearTextButton,
	clearSearchText,
	clearPushListener,
} from './searchBar.js';
import {
	deleteSearchResult,
	buildSearchResults,
	clearStatsLine,
	setStatsLine,
} from './searchResults.js';
import { getSearchTerm, retrieveSearchResults } from './dataFunctions.js';

document.addEventListener('readystatechange', (event) => {
	if (event.target.readyState === 'complete') {
		initApp();
	}
});

const initApp = () => {
	setSearchFocus();

	const search = document.getElementById('search');
	search.addEventListener('input', showClearTextButton);

	const clearBtn = document.getElementById('clear-btn');
	clearBtn.addEventListener('click', clearSearchText);
	clearBtn.addEventListener('keydown', clearPushListener);

	const searchForm = document.getElementById('search-bar');
	searchForm.addEventListener('submit', submitTheSearch);
};

const submitTheSearch = (event) => {
	event.preventDefault();
	deleteSearchResult();
	processTheSearch();
	setSearchFocus();
};

const processTheSearch = async () => {
	clearStatsLine();
	const searchTerm = getSearchTerm();
	if (searchTerm === '') return;
	const resultArray = await retrieveSearchResults(searchTerm);

	if (resultArray.length) buildSearchResults(resultArray);
	setStatsLine(resultArray.length);

	document.getElementById('result-section').classList.remove('none');
};
