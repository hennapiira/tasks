<script>
  import Form from './AddTask.svelte';
  import Task from './Task.svelte';
  import Button from './Button.svelte';
  import TaskDone from './TaskDone.svelte';
  import allTasks from './taskStore.js';

  // tuodaan sovelluksen nimi propsina main.js tiedostosta
  export let app;

  let showModal = false;

  // Funktio, joka määrittelee modalin näkyvyyden
  const showHide = () => {
    showModal = !showModal;
  };

  let tasksDone = [];

  // Funktio addTask päivittää taskStorea ja lisää sinne uuden tehtävän
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

  // Funktio deleteTask päivittää taskStorea ja filtteröi ja poistaa tehtävän nimen(task) perusteella
  // (huono, jos on 2 samannimistä taskia)
  const deleteTask = (ce) => {
    allTasks.update((tasks) => {
      return tasks.filter((task) => task.task !== ce.detail.task);
    });
  };

  // Funktio markedDone päivittää taskStorea ja filtteröi ja poistaa tehtävän nimen(task) perusteella
  // ja lisää filtteröidyn tehtävän tasksDone tauluun
  const markedDone = (ce) => {
    allTasks.update((tasks) => {
      return tasks.filter((task) => task.task !== ce.detail.task);
    });
    tasksDone = [...tasksDone, ce.detail];
  };
</script>

<main>
  <div class="header">
    <!-- Näytetään sovelluksen nimi, joka on välitetty propsina -->
    <h1>{app}</h1>
    <!-- Jos showModal on true, renderöidään lomake (Form) AddTask.svelte komponentista. 
      Välitetään sille kaksi tapahtumankäsittelijää (cancel ja save) ja määritellään 
    niihin showHide ja addTask funktiot. -->
    {#if showModal}
      <Form on:cancel={showHide} on:save={addTask} />
      <!-- Jos showModal on false, näytetään "Add new task" -painike -->
    {:else}
      <div class="addButton">
        <Button on:click={showHide}>Add new task</Button>
      </div>
    {/if}
  </div>
  <div class="container">
    <h2>In progress</h2>
    <!-- Renderöidään tehtävät (Task) Task.svelte komponentista. 
      Välitetään kaksi tapahtumankäsittelijää (done ja delete) ja määritellään
      niihin markedDone ja deleteTask funktiot. -->
    <Task on:done={markedDone} on:delete={deleteTask} />
  </div>
  <div class="container">
    <h2>Done</h2>
    <!-- Toistetaan seuraavaa osiota jokaiselle tasksDone-taulukon alkiolle -->
    {#each tasksDone as taskDone}
      <!--Renderöidään yksittäinen valmistehtävä (TaskDone) TaskDone.svelte komponentista ja välitetään sille taulukko taskDone-->
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
