export const setSearchFocus = () => {
	document.getElementById('search').focus();
};

const search = document.getElementById('search');
const clearBtn = document.getElementById('clear-btn');

export const showClearTextButton = () => {
	if (search.value.length) {
		clearBtn.classList.remove('none');
	} else {
		clearBtn.classList.add('none');
	}
};

export const clearSearchText = (event) => {
	clearBtn.classList.add('none');
	setSearchFocus();
};

export const clearPushListener = (event) => {
	if (event.key === 'Enter' || event.key === ' ') {
		clearBtn.click();
	}
};
