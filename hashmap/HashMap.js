// Hash Map : A hash map is a data structure that can map keys to values
// A HashMap stores key–value pairs and uses a hash function to compute an index in an internal array (called buckets). 
// To handle collisions, we usually use chaining (linked lists/arrays at each bucket) or open addressing.

class HashMap {

    constructor(size = 16) {
        this.buckets = Array.from({ length: size }, () => []); // Create an array of buckets
        this.size = size; // Initialize the size of the hash map
    }

    // simple hash function to convert a key to an index
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size; // Ensure the index is within the bounds of the buckets array
    }

    // Insert or update
    set(key, value) {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        // Check if the key already exists
        for (let i = 0; i < this.buckets[index].length; i++) {
            if (this.buckets[index][i][0] === key) {
                this.buckets[index][i][1] = value; // Update value
                return;
            }
        }

        // Add new key-value pair
        this.buckets[index].push([key, value]);
    }

    // Retrieve value by key
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (!bucket) return undefined; // safety check

        for (let i = 0; i < bucket.length; i++) {
            const [k, v] = bucket[i];
            if (k === key) {
                return v;
            }
        }
        return undefined; // Key not found
    }

    // Remove a key-value pair
    delete(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        if (!bucket) return;

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                this.size--;
                return;
            }
        }
    }

    // Check if a key exists
    has(key) {
        return this.get(key) !== undefined;
    }

    // Get the size of the hash map
    getSize() {
        return this.size;
    }

    // Clear the hash map
    clear() {
        this.buckets = [];
        this.size = 0;
    }

    // Iterate through all key-value pairs
    forEach(callback) {
        for (let i = 0; i < this.buckets.length; i++) {
            const bucket = this.buckets[i];
            if (bucket) {
                for (let j = 0; j < bucket.length; j++) {
                    const [key, value] = bucket[j];
                    callback(key, value);
                }
            }
        }
    }

    // Convert to string representation
    toString() {
        let result = '';
        this.forEach((key, value) => {
            result += `${key}: ${value}, `;
        });
        return `{ ${result.slice(0, -2)} }`;
    }

    // Convert to JSON representation
    toJSON() {
        const obj = {};
        this.forEach((key, value) => {
            obj[key] = value;
        });
        return obj;
    }

    // Check if the hash map is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get all keys
    keys() {
        const keysArray = [];
        this.forEach((key) => {
            keysArray.push(key);
        });
        return keysArray;
    }

    // Get all values
    values() {
        const valuesArray = [];
        this.forEach((_, value) => {
            valuesArray.push(value);
        });
        return valuesArray;
    }

}


// Example usage
const map = new HashMap();

map.set('name', 'Alice');
map.set('age', 30);
map.set('city', 'New York');
map.set('country', 'USA');

console.log(map.toString()); // { name: Alice, age: 30, city: New York, country: USA }

map.forEach((key, value) => {
    console.log(`Key: ${key}, Value: ${value}`);
});

console.log("---------------"); 

console.log(map.get('name')); // Alice
console.log(map.get('age')); // 30


console.log("---------------"); 
map.delete('age');
console.log(map.get('age')); // undefined

console.log(map.toString()); // { name: Alice, city: New York, country: USA }

console.log("---------------");
//get all keys
console.log(map.keys()); // ['name', 'city', 'country']
//get all values
console.log(map.values()); // ['Alice', 'New York', 'USA']

console.log("---------------");
console.log(map.getSize()); 