<template>
    <div id="block-header">
        <h1 id="title">
        How many states have you visited?
        </h1>
    </div>
</template>

<script>

export default ({
    name: 'PageHeader' ,
    

})
</script>

<style scoped>
#block-header{
    padding: 2rem 1rem;
    background-blend-mode: lighten;
    margin-bottom: 10px;
    background-image:url('~@/assets/header.jpg');
    background-position: center;
    background-size: cover;
}
#title{
    font-weight: 100;
    color:black;
    font-size: 20px;
    font-family: serif;
    text-align: right;
    margin-right: 429px;
    font-style:italic;
}
</style>
