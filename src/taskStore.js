import { writable } from 'svelte/store';

// määritellään tasks niminen store
const tasks = writable([]);

export default tasks;
