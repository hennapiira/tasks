import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    app: 'Task management',
  },
});

export default app;
