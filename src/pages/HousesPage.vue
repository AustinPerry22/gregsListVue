<template>
    <div class="container-fluid">
        <section class="row">
            <button v-if="showForm == false" @click="toggleForm()" class="col-12 btn btn-dark">List House</button>
            <HouseForm v-else />
        </section>
        <section class="row justify-content-evenly">
            <div v-for="house in houses" :key="house.id" class="col-6 col-md-5">
                <HouseCard :house="house" />
            </div>
        </section>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';
import { housesService } from '../services/HousesService'
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';

export default {
    setup() {

        onMounted(() => {
            getHouses();
        });

        async function getHouses() {
            try {
                await housesService.getHouses()
            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            houses: computed(() => AppState.houses),
            showForm: computed(() => AppState.houseForm),

            toggleForm() {
                AppState.houseForm = !AppState.houseForm
            }
        };
    },
};
</script>


<style></style>