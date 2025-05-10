
export default class Database {
    /**
     * @param {Object} storage persistance manager
     */
    constructor(storage) {
        this.items = [];
        this.latestId = 0;
        this.storage = storage;
    }

    /**
     * Add an item to storage
     * @param {string} name 
     * @param {Array<string>} tags 
     * @param {string} picture 
     */
    add(name, tags, picture) {
        this.items.push({
            name: name,
            tags: tags,
            picture: picture
        });
        if (this.storage && typeof this.storage.saveToStorage === 'function') {
            this.storage.saveToStorage(this.items);
        }
    }

    /**
     * Load the items from storage
     */
    loadFromStorage() {
        this.logs = this.storage.readFromStorage();
        this.latestId - this.storage.readLatestId();

    }

}