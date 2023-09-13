<template>
    <router-link :to="{ name: 'HouseDetails', params: { houseId: house.id } }">
        <section class="row houseCard elevation-5">
            <div class="col-5 ps-0">
                <img :src="house.imgUrl" alt="house picture" class="houseImg">
            </div>
            <div class="col-7">
                <div class="d-flex justify-content-between">
                    <h5>Bedrooms: {{ house.bedrooms }}</h5>
                    <h5>Floors: {{ house.levels }}</h5>
                </div>
                <div class="d-flex justify-content-between">
                    <h5>Bathrooms: {{ house.bathrooms }}</h5>
                    <h5>Year: {{ house.year }}</h5>
                </div>
                <h4>Price: ${{ house.price }}</h4>
            </div>
        </section>
    </router-link>
</template>

<script>
import { House } from '../models/House';

export default {
    props: { house: { type: House, required: true } },
    setup() {
        return {

        };
    },
};
</script>


<style lang="scss" scoped>
.houseImg {
    height: 20vh;
    width: 100%;
    border-radius: .5em;
}

.houseCard {
    margin-top: 2vh;
    margin-bottom: 2vh;
    border-radius: .5em;
    background-color: gray;
    height: 20vh;
    transition: all .1s ease;
    color: rgb(234, 238, 247);
    cursor: pointer;

    &:hover {
        transition: all .2s ease;
        transform: scale(1.05);
    }
}
</style>