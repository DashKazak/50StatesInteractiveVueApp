<template>
<div>
<h2>Page not found</h2>

<div id="send-home">
<!-- Navigation link with route name -->
Would you like to <router-link v-bind:to="{ name: 'stateList' }">go to the home page?</router-link>
<!-- Or we can use the path directly -->
Would you like to <router-link to="/">go to the home page?</router-link>
</div>
</div>
</template>

<script>
export default {
name: 'NotFound',
}
</script>