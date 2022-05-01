<template>
    <div id="navigation-links">
        <span class="nav-link">
            <router-link to="/">Home</router-link>
        </span>
        <span class="nav-link">
            <router-link to="/about">About</router-link>
        </span>
        
        <p>
        Header by Dariusz Sankowski. Find him on<a href="https://unsplash.com/photos/3OiYMgDKJ6k"> Unsplash</a>
        </p>
        <p><a target="_blank" href="https://icons8.com/icon/PBG0to13vK61/map-grid">Map Grid</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>

    </div>
</template>

<script>
export default {
    name:'PageFooter'
}
</script>
<style scoped>
.nav-link{
    margin:1rem;
}
</style>
