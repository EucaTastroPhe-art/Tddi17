<script lang="ts">
    import dayjs from 'dayjs'
  
    export let format = 'YYYY-MM-DDTHH:mm'
    export let date = new Date()
    export let id 
    export let is_writable_state : boolean = false;
    let internal
  
    const input = (x) => (internal = dayjs(x).format(format))
    const output = (x) => (date = dayjs(x, format).toDate())
  
    $: input(date)
    $: output(internal)
    
  </script>
  
 
  <input type="datetime-local" id={id} class="form-control iphone-center" bind:value={internal} disabled={is_writable_state}/>


  <style>

    .iphone-center {
      text-align: center; /*safari*/
      display: inline-block; /*iphone*/
      -webkit-appearance: none; /*use our design for iOS*/
    }
  </style>
