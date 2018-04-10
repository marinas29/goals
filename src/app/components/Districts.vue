<template>
    <div class="info">
        <div class="info__districts">
            <template v-if="!isLoading">
                <p class="info__districts__title">Selecione um distrito:</p>
                <select v-model="districtId" @change="listGoals(districtId)" class="info__districts__select">
                    <option v-for="(district, d) in districts" :key="d" :value="district.id">
                        {{ district.name }}
                    </option>
                </select>
            </template>
            <template v-else>
                <div class="loader" :class="{ 'loader--active': isLoading }"></div>
            </template>
        </div>
        <div class="info__goals">
            <goals v-for="(item, g) in goals" :goal="item" :key="g"></goals>
        </div>
    </div>
</template>
<script>
    import Services from '_services/rest/index.js'
    import Goals from './Goals.vue'

    export default {
        data () {
            return {
                districts: [],
                districtId: '',
                goals: [],
                isLoading: false
            }
        },
        components: {
            Goals
        },
        methods: {
            listDistricts () {
                this.isLoading = true

                Services.getDistricts()
                    .then(response => {
                        this.districts = response.districts
                        this.isLoading = false
                    })
                    .catch(error => { throw error })
            },
            listGoals () {
                this.loading = true

                Services.getGoals(this.districtId)
                    .then(response => {
                        this.goals = response.goals
                        this.isLoading = false
                    })
                    .catch(error => { throw error })
            }
        },
        mounted () {
            this.listDistricts()
        }
    }
</script>
<style lang="scss" scoped>
    @import '~_assets/css/loader.css';
    @import '~_assets/scss/_vars.scss';

    .info {
        display: flex;
        flex-direction: column;

        &__districts {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 20px;

            @media screen and (max-width: $screen-sm) {
                flex-direction: column;
            }

            &__title {
                padding-right: 15px;

                @media screen and (max-width: $screen-sm) {
                    padding-right: 0;
                    padding-bottom: 15px;
                    width: 100%;
                    text-align: center;
                }
            }

            &__select {
                display: block;
                width: 200px;
                height: 40px;
                
                font-size: 1rem;
                color: $color-blue--base;
                background-color: $color-white--base;
                border: 1px solid $color-grey--base;
            }
        }

        &__goals {
            display: flex;
            flex-wrap: wrap;

            @media screen and (max-width: 768px) {
                flex-direction: column;
            }
        }
    }
</style>
