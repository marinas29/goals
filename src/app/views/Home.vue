<template>
    <div class="home">
        <h1 class="home__title">"O sistema De Olho nas Metas ajudará cidadãos e organizações da sociedade civil a acompanhar e monitorar o cumprimento de metas da prefeitura de São Paulo."</h1>
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

<style lang="scss" scoped>
    @import '~_assets/css/base.css';
    @import '~_assets/scss/_vars.scss';

    .home {
        position: relative;
        height: 100%;
        padding: 20px;

        &__title {
            font-size: 2rem;
            font-weight: lighter;
            color: $color-blue--base;
            text-align: center;
            padding-bottom: 20px;

            @media screen and (max-width: $screen-md) {
                font-size: 1rem;
            }
        }
    }
</style>
