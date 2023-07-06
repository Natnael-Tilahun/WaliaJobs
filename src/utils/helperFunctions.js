// Function to retrieve checkbox state from storage
const getFilterStateFromStorage = (key) => {
  const storedState = localStorage.getItem(key);
  return storedState ? JSON.parse(storedState) : {};
};

// Function to save checkbox state to storage
const saveFilterStateToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Function to clear local storage
const clearFilterFromStorage = () => {
  localStorage.clear();
};

// Check if the object is empty
const isEmpty = (obj) => Object.keys(obj).length === 0;

const handleFilter = (filterType, filterStateKey, checkboxState, filters) => {
  const values = params.getAll(key);
  const index = filters.indexOf(value);

  if (index === -1) {
    filters.push(value);
  } else {
    filters.splice(index, 1);
  }

  setSelectedFilters((prevState) => ({
    ...prevState,
    [filterStateKey]: filters,
  }));

  setSearchParams(filterType, filters);

  if (values.length) {
    !values.includes(value) && params.append(key, value);
  } else if (checkboxState.length) {
    !checkboxState.includes(value) && checkboxState.push(value);
    checkboxState.forEach((val) => {
      params.append(key, val);
    });
  } else {
    params.append(key, value);
  }

  const filterState = { ...selectedFilters };
  filterState[filterStateKey] = filters;
  saveFilterStateToStorage("filterState", JSON.stringify(filterState));
};

export {
  saveFilterStateToStorage,
  getFilterStateFromStorage,
  clearFilterFromStorage,
  isEmpty,
};
