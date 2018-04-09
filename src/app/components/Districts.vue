<template>
    <div class="info">
        <div class="info__districts">
            <template v-if="!isLoading">
                <p class="info__districts__title">Please, select your district:</p>
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
            <goals v-for="(goal, g) in goals" :item="goal" :key="g"></goals>
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

    .info {
        display: flex;
        flex-direction: column;

        &__districts {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 20px;

            &__title {
                padding-right: 15px;
            }

            &__select {
                display: block;
                width: 200px;
                height: 40px;
                
                font-size: 14px;
                color: #353b48;
                background-color: #fff;
                border: 1px solid #cccccc;
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
