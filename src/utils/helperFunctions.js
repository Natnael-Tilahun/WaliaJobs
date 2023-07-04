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

export {
  saveFilterStateToStorage,
  getFilterStateFromStorage,
  clearFilterFromStorage,
  isEmpty,
};
