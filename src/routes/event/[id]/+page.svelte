<script lang="ts">
  import type { IEventItem } from "src/dtos/IEventItem";

  /**
   * @type {any}
   */
  export let data: IEventItem | any;
  const keys = Object.keys(data) as string[];
</script>

{#each keys as key}
  <input value={data[key]} />
{/each}
