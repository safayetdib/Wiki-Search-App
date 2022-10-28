export const deleteSearchResult = () => {
	const parentElement = document.getElementById('search-results');
	let child = parentElement.lastElementChild;
	while (child) {
		parentElement.removeChild(child);
		child = parentElement.lastElementChild;
	}
};

export const buildSearchResults = (resultArray) => {
	resultArray.forEach((result) => {
		const resultItem = createResultItem(result);
		const resultContents = document.createElement('div');
		resultContents.classList.add('result-contents');
		if (result.img) {
			const resultImage = createResultImage(result);
			resultContents.append(resultImage);
		}
		const resultText = createResultText(result);
		resultContents.append(resultText);

		resultItem.append(resultContents);
		const searchResults = document.getElementById('search-results');
		searchResults.append(resultItem);
	});
};
const createResultItem = (result) => {
	const resultItem = document.createElement('div');
	resultItem.classList.add('result-item');
	resultItem.innerHTML = `
			<div class="result-title">
				<a href="https://en.wikipedia.org/?curid=${result.id}" target="_blank">${result.title}</a>
			</div>`;
	return resultItem;
};
const createResultImage = (result) => {
	const resultImage = document.createElement('div');
	resultImage.classList.add('result-image');
	resultImage.innerHTML = `<img src="${result.img}" alt="${result.title}">`;
	return resultImage;
};
const createResultText = (result) => {
	const resultText = document.createElement('div');
	resultText.classList.add('result-text');
	resultText.innerHTML = `<p class="result-description">${result.text}</p>`;
	return resultText;
};

export const setStatsLine = (numberOfResults) => {
	const statsLine = document.getElementById('stats');
	if (numberOfResults) {
		statsLine.textContent = `Displaying ${numberOfResults} Results`;
	} else {
		statsLine.textContent = `Sorry, no data found!`;
	}
};

export const clearStatsLine = () => {
	document.getElementById('stats').textContent = '';
};
