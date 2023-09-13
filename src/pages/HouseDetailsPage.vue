<template>
    <div v-if="activeHouse" class="container-fluid">
        <section class="row">
            <div class="col-5">
                <img :src="activeHouse.imgUrl" alt="house image">
            </div>
            <div class="col-7 text-center">
                <h2>Price: ${{ activeHouse.price }}</h2>
                <h2>bedrooms: {{ activeHouse.bedrooms }}</h2>
                <h2>bathrooms: {{ activeHouse.bathrooms }}</h2>
                <h2>levels: {{ activeHouse.levels }}</h2>
                <h2>year: {{ activeHouse.year }}</h2>
                <p>{{ activeHouse.description }}</p>
            </div>
            <button v-if="account.id == activeHouse.creatorId" @click="deleteHouse">Delete listing</button>
        </section>

    </div>
    <div v-else>
        loading
    </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { router } from '../router';
import { AppState } from '../AppState';
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop';
import { housesService } from '../services/HousesService';
export default {
    setup() {
        const route = useRoute()
        onMounted(getHouseById)
        const houseId = route.params.houseId
        async function getHouseById() {
            try {
                await housesService.getHouseById(houseId)
            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            activeHouse: computed(() => AppState.activeHouse),
            account: computed(() => AppState.account),

            async deleteHouse() {
                try {
                    await housesService.deleteHouse(houseId)
                    router.push({ name: 'Houses' })
                } catch (error) {
                    Pop.error(error)
                }
            }
        };
    },
};
</script>


<style lang="scss" scoped>
img {
    height: 50vh;
    width: 100%;
}
</style>