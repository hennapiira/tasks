<script>
  import Form from './AddTask.svelte';
  import Task from './Task.svelte';
  import Button from './Button.svelte';
  import TaskDone from './TaskDone.svelte';
  export let app;

  let showModal = false;

  const showHide = () => {
    showModal = !showModal;
  };

  let tasks = [
    {
      task: 'testaile',
      details: 'testaillaan UI:ta svelte sovelluksessa',
      deadline: {
        day: 26,
        month: 'November',
      },
    },
  ];
  let tasksDone = [];

  const addTask = (e) => {
    tasks = [
      ...tasks,
      {
        task: e.detail.task,
        details: e.detail.details,
        deadline: e.detail.deadline,
      },
    ];
    showHide();
  };

  const deleteTask = (ce) => {
    tasks = tasks.filter((task) => task.task !== ce.detail);
  };

  const markedDone = (ce) => {
    tasks = tasks.filter((task) => task.task !== ce.detail.task);
    tasksDone = [...tasksDone, ce.detail];
  };
</script>

<main>
  <h1>{app}</h1>
  {#if !showModal}
    <Button on:click={showHide}>Add new task</Button>
  {:else}
    <Form on:cancel={showHide} on:save={addTask} />
  {/if}
  <div class="container">
    <h2>In progress</h2>
    {#each tasks as task}
      <Task {...task} on:done={markedDone} on:delete={deleteTask} />
    {/each}
  </div>
  <div class="container">
    <h2>Done</h2>
    {#each tasksDone as taskDone}
      <TaskDone {...taskDone} />
    {/each}
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
  :global(body) {
    background-color: #edf0f8;
    font-family: 'Ubuntu', sans-serif;
  }

  h1 {
    font-size: 48px;
    margin-left: 30px;
    margin-top: 70px;
    color: #333;
    font-weight: 700;
  }

  .container {
    float: left;
    width: 30%;
  }

  h2 {
    font-size: 48px;
    margin-left: 30px;
    margin-top: 70px;
    color: #333;
    font-weight: 700;
    font-size: 1.5rem;
  }
</style>
