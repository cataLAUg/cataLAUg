/**
 * @typedef {Object} Item
 * @property {string} name
 * @property {Array<string>} tags
 * @property {string} picture
 */



export default class Storage {
    constructor() {
        this.StorageKey = "cataLAUg-storage";
        this.latestIDKey = "cataLAUg-latestID"
    }

    /**
     * Reads the data from storage
     * @returns {Array<Item>} the items in storage
     */
    readFromStorage() { 
        const logs = localStorage.getItem(this.StorageKey);
        if(!logs) { // null check
            return []; //if null : item does not exists : return empty array
        }
        return JSON.parse(logs);
    }

    /**
     * Save the data to storage, overrides current saved data
     * @param {Array<Item>} items the items to save
     */
    saveToStorage(items) {
        localStorage.setItem(this.localStorageKeym, JSON.stringify(items));
    }

    /**
     * Reads the latest id froms storage
     * @returns {int} the latest id
     */
    readLatestId() {
        const id = localStorage.getItem(this.latestIDKey);
        if(!id) { // null check
            return "0"; //if null : item does not exist : return 0
        }
        return JSON.parse(id);
    }

    /**
     * Save the latest id to storage, overrides current saved data
     * @param {int} id the id to save as latest
     */
    saveLatestId(id) {
        localStorage.setItem(this.latestIDKey, JSON.stringify(id));
    }
}