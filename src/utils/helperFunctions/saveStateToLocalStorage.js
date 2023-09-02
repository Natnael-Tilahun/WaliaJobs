// Function to save checkbox state to storage
const saveStateToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  export default saveStateToLocalStorage