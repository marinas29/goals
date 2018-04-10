<template>
    <div class="goal">
        <accordion :item="goal"></accordion>
    </div>
</template>
<script>
    import Accordion from '../common/Accordion.vue'

    export default {
        props: {
            goal: {
                default: {},
                type: Object
            }
        },
        components: {
            Accordion
        }
    }
</script>
<style lang="scss" scoped>
    .goal {
        width: 100%;
    }
</style>
