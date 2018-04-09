<template>
    <div class="goal">
        <h2 v-if="item.name" class="goal__name">{{ item.name }}</h2>
        <p v-if="item.description" class="goal__description">{{ item.description }}</p>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            default: {},
            type: Object
        }
    }
}
</script>
<style lang="scss" scoped>
    .goal {
        border: 1px solid #353b48;
        padding: 20px;
        margin: 5px;

        display: flex;
        flex-direction: column;
        flex: 1;

        &__name {
            font-size: 1.5rem;
        }
    }
</style>
