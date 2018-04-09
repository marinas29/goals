<template>
    <div class="home">
        <districts></districts>
    </div>
</template>
<script>
    import Districts from '_components/Districts.vue'

    export default {
        name: 'home',
        components: {
            Districts
        }
    }
</script>

<style scoped>
    @import '~_assets/css/base.css';

    .home {
        position: relative;
        height: 100%;
        padding: 20px;
    }
</style>
