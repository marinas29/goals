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
    @import '~_assets/scss/_vars.scss';

    .accordion {
        position: relative;
        width: 100%;
        color: $color-white--base;
        border-bottom: 1px solid $color-white--base;
        overflow: hidden;

        &__radio {
            display: none;

            &:checked + .accordion__title:after {
                transform: rotate(360deg);
            }

            &:checked ~ .accordion__content {
                max-height: 100%;
                border-bottom: 1px solid $color-blue--base;
            }
        }

        &__title {
            line-height: 50px;
            height: auto;
            display: block;
            position: relative;
            padding-left: 15px;
            padding-right: 50px;
            background: $color-blue--base;
            font-family: 'Open Sans Condensed', sans-serif;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;

            @media screen and (max-width: $screen-md) {
                padding-right: 25px;
                line-height: 30px;
                font-size: 1rem;
            }

            &:after {
                content: '+';
                position: absolute;
                right: 0;
                top: 0;
                width: 50px;
                height: 100%;
                transition: transform .5s;
                
                display: flex;
                justify-content: center;
                align-items: center;

                @media screen and (max-width: $screen-md) {
                    width: 25px;
                }
            }
        }

        &__content {
            overflow: hidden;
            background: $color-white--base;
            color: $color-blue--base;
            max-height: 0;
            border-bottom: 1px solid $color-white--base;
            transition: border-bottom .4s, max-height .4s;
    
            &__description {
                padding: 20px;
                font-size: 1rem;

                @media screen and (max-width: $screen-md) {
                    font-size: 0.8rem;
                    padding: 15px;
                }
            }
        }
    }
</style>