function getLocalStorage(key) {
  try {
    const stateInLocalStorage = localStorage.getItem(key);
    return stateInLocalStorage === null
      ? undefined
      : JSON.parse(stateInLocalStorage);
  } catch (error) {
    console.log('Get state error: ', error);
  }
}

export default getLocalStorage;
