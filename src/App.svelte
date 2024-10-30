<script>
  import Form from './AddTask.svelte';
  import Task from './Task.svelte';
  import Button from './Button.svelte';
  import TaskDone from './TaskDone.svelte';
  import allTasks from './taskStore.js';

  // Import the application name as a prop from the main.js file
  export let app;

  let showModal = false;

  // Function that sets the visibility of the modal
  const showHide = () => {
    showModal = !showModal;
  };

  let tasksDone = [];

  // The addTask function updates taskStore and adds a new task to it
  const addTask = (e) => {
    allTasks.update((tasks) => [
      ...tasks,
      {
        task: e.detail.task,
        details: e.detail.details,
        deadline: e.detail.deadline,
      },
    ]);
    showHide();
  };

  // The deleteTask function updates taskStore by filtering and removing a task based on its name (task)
  // (not ideal if there are two tasks with the same name)
  const deleteTask = (ce) => {
    allTasks.update((tasks) => {
      return tasks.filter((task) => task.task !== ce.detail.task);
    });
  };

  // The markedDone function updates taskStore by filtering and removing a task based on its name (task)
  // and adds the filtered task to the tasksDone array
  const markedDone = (ce) => {
    allTasks.update((tasks) => {
      return tasks.filter((task) => task.task !== ce.detail.task);
    });
    tasksDone = [...tasksDone, ce.detail];
  };
</script>

<main>
  <div class="header">
    <!-- Display the application name that has been passed as a prop -->
    <h1>{app}</h1>
    <!-- If showModal is true, render the form (Form) from the AddTask.svelte component.
     Pass it two event handlers (cancel and save) and define the showHide and addTask functions for them. -->
    {#if showModal}
      <Form on:cancel={showHide} on:save={addTask} />
      <!-- If showModal is false, display the "Add new task" button -->
    {:else}
      <div class="addButton">
        <Button on:click={showHide}>Add new task</Button>
      </div>
    {/if}
  </div>
  <div class="container">
    <h2>In progress</h2>
    <!-- Render the tasks (Task) from the Task.svelte component.
     Pass two event handlers (done and delete) and define the markedDone and deleteTask functions for them. -->
    <Task on:done={markedDone} on:delete={deleteTask} />
  </div>
  <div class="container">
    <h2>Done</h2>
    <!-- Repeat the following section for each element in the tasksDone array -->
    {#each tasksDone as taskDone}
      <!-- Render a single completed task (TaskDone) from the TaskDone.svelte component and pass it the taskDone array -->
      <TaskDone {...taskDone} />
    {/each}
  </div>
</main>

<style>
  h1 {
    font-size: 48px;
    margin-left: 30px;
    margin-top: 70px;
    color: #333;
    font-weight: 700;
  }

  .header {
    display: flex;
    align-items: center;
  }

  .addButton {
    margin-left: 150px;
    margin-top: 40px;
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
