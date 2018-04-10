<template>
    <div class="accordion">
        <input v-if="item.name" class="accordion__radio" type="checkbox" :id="[[ item.id ]]" :value="[[ item.name ]]" name="goal">
        <label v-if="item.name" class="accordion__title" :for="[[ item.id ]]">{{ item.name }}</label>
        <div v-if="item.description" class="accordion__content">
            <p class="accordion__content__description">{{ item.description }}</p>
        </div>
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
    .accordion {
        position: relative;
        width: 100%;
        color: #ffffff;
        border-bottom: 1px solid #ffffff;
        overflow: hidden;

        &__radio {
            display: none;

            &:checked + .accordion__title:after {
                transform: rotate(360deg);
            }

            &:checked ~ .accordion__content {
                max-height: 350px;
                border-bottom: 1px solid #353b48;
            }
        }

        &__title {
            line-height: 50px;
            height: auto;
            display: block;
            position: relative;
            padding-left: 12px;
            background: #353b48;
            font-weight: bold;
            cursor: pointer;

            &:after {
                content: '+';
                position: absolute;
                right: 0;
                top: 0;
                display: block;
                width: 50px;
                height: 50px;
                text-align: center;
                transition: all .5s;
            }
        }

        &__content {
            max-height: 0;
            overflow: hidden;
            color: #353b48;
            background: #ffffff;
            border-bottom: 1px solid #ffffff;
            transition: border-bottom .4s, max-height .4s;
    
            &__description {
                padding: 20px;
            }
        }
    }

    // .accordion__radio:checked ~ .accordion__content {
    //     max-height: 350px;
    //     border-bottom: 1px solid #353b48;
    // }

    // .accordion__radio:checked + .accordion__title::after {
    //     transform: rotate(360deg);
    // }
</style>