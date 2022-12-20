<!-- componentes -->
<script lang="ts">
  import { onMount } from "svelte";
  import Event from "../components/event.svelte";
  import type { IEventItem } from "../dtos/IEventItem";
  import axios from "axios";

  async function getList(): Promise<IEventItem[]> {
    const response = await axios.get(`http://localhost:3000/events`);
    return response.data;
  }
  let promise = getList();
  function handleClick() {
    promise = getList();
  }
</script>

<h1>Lista de eventos</h1>
<button on:click={handleClick}>atualizar</button>

{#await promise}
  <p>Waiting</p>
{:then list}
  <ul>
    {#if list != null}
      {#each list as item}
        <li>
          <Event data={item} />
        </li>
      {/each}
    {/if}
  </ul>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<style lang="scss" global>
  h1 {
    color: $primary-color;
  }
</style>
