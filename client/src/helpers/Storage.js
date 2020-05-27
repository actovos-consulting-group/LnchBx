const StorageHelper = {
  get: name => {
    const value = localStorage.getItem(name);
    if (value) {
      return JSON.parse(value);
    }
    return false;
  },
  set: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  delete: name => {
    localStorage.removeItem(name);
  },
};

export default StorageHelper;
