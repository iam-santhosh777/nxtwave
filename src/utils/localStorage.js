export const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('user');
      if (serializedState === null) {
        return {
          phoneNumber: null,
          isLoggedIn: false,
        };
      }
      return JSON.parse(serializedState);
    } catch (e) {
      console.warn("Could not load state from localStorage", e);
      return {
        phoneNumber: null,
        isLoggedIn: false,
      };
    }
  };
  
export const saveToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('user', serializedState);
    } catch (e) {
      console.warn("Could not save state to localStorage", e);
    }
  };
  