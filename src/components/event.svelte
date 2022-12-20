<script lang="ts">
  import type { IEventItem } from "src/dtos/IEventItem";
  /**
   * @type {any}
   */
  export let data: IEventItem;
</script>

{#if data != null}
  <a href="/event/{data.id}">
    event {data.id}, author {data.author}, date {data.date}, title {data.title}
  </a>
{/if}

<style lang="scss">
  a {
    width: 100%;
    color: $primary-color;
  }
</style>
