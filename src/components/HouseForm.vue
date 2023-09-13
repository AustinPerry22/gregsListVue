<template>
    <form @submit.prevent="createHouse">
        <label for="bedrooms">Bedrooms:</label>
        <input v-model="houseData.bedrooms" type="number" name="bedrooms" required>
        <label for="bathrooms">Bathrooms:</label>
        <input v-model="houseData.bathrooms" type="number" name="bathrooms" required>
        <label for="year">year:</label>
        <input v-model="houseData.year" type="number" name="year" required>
        <label for="levels">levels:</label>
        <input v-model="houseData.levels" type="number" name="levels" required>
        <label for="img">image Url:</label>
        <input v-model="houseData.imgUrl" type="text" name="img" required>
        <label for="description">description:</label>
        <input v-model="houseData.description" type="text" name="description" required>
        <label for="price">price:</label>
        <input v-model="houseData.price" type="number" name="price" required>
        <button type="submit" class="btn btn-dark"> list this house</button>
    </form>
</template>

<script>
import { AppState } from '../AppState';
import { router } from '../router';
import { housesService } from '../services/HousesService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
import { ref } from 'vue';

export default {
    setup() {
        const houseData = ref({})
        return {
            houseData,
            async createHouse() {
                try {
                    const newHouse = await housesService.createHouse(houseData.value)
                    logger.log(newHouse)
                    houseData.value = {}
                    AppState.houseForm = false
                    router.push({ name: 'HouseDetails', params: { houseId: newHouse.id } })

                } catch (error) {
                    Pop.error(error)
                }
            }
        };
    },
};
</script>


<style></style>