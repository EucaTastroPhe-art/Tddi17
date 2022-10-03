<script>
    export let href;
    export let image_src;
    export let id;
</script>

<main>
    <a class="btn btn-back rounded-circle" href={href} id={id}>
        <img src={image_src} class="btn-back-img" alt="back" unselectable>
    </a>
</main>

<style>
    .btn-back {
        padding: 0;
        width: 100%;
        height: 100%;
        max-width: 100px;
        max-height: 100px;
    }
    .btn-back:hover {
        background-color: #84b280;
    }
    .btn-back-img:hover {
        -webkit-filter: invert(1);
        filter: invert(1);
    }
    .btn-back-img {
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
</style>