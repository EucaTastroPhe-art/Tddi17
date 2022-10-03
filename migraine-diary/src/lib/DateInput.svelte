<script lang="ts">
    import dayjs from 'dayjs'
  
    export let format = 'YYYY-MM-DD'
    export let date = new Date()
    export let id 
    export let is_writable_state : boolean = false;
    let internal
  
    const input = (x) => (internal = dayjs(x).format(format))
    const output = (x) => (date = dayjs(x, format).toDate())
  
    $: input(date)
    $: output(internal)
    
  </script>
  
 
  <input type="date" id={id} class="form-control iphone-center date-input" bind:value={internal} on:change disabled={is_writable_state}/>


  <style>

.iphone-center {
    text-align: center; /*safari*/
    display: inline-block; /*iphone*/
    -webkit-appearance: none; /*use our design for iOS*/
}
input[type="date"] {
    position: relative;
    
}

/* create a new arrow, because we are going to mess up the native one
see "List of symbols" below if you want another, you could also try to add a font-awesome icon.. */
input[type="date"]:after {
    content: "\25BC"; 
    color: #555;
    padding: 0 5px;
}

/* change color of symbol on hover */
input[type="date"]:hover:after {
    color: #84b280
}

/* make the native arrow invisible and stretch it over the whole field so you can click anywhere in the input field to trigger the native datepicker*/
input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    color: transparent;
    background: transparent;
}

/* adjust increase/decrease button */
input[type="date"]::-webkit-inner-spin-button {
    z-index: 1;
}

 /* adjust clear button */
 input[type="date"]::-webkit-clear-button {
     z-index: 1;
 }
  </style>
