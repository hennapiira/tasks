import { writable } from 'svelte/store';

// Define a store named tasks
const tasks = writable([]);

export default tasks;
