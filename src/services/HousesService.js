import { AppState } from "../AppState"
import { House } from "../models/House"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HousesService {
    async getHouses() {
        const res = await api.get('api/houses')
        AppState.houses = res.data.map(house => new House(house))
    }

    async getHouseById(houseId) {
        AppState.activeHouse = null
        const res = await api.get(`api/houses/${houseId}`)
        AppState.activeHouse = new House(res.data)
    }

    async createHouse(body) {
        const res = await api.post('api/houses', body)
        const newHouse = new House(res.data)
        AppState.houses.push(newHouse)
        return newHouse
    }

    async deleteHouse(houseId) {
        AppState.activeHouse = null
        await api.delete(`api/houses/${houseId}`)
    }
}

export const housesService = new HousesService 