import { toJS } from 'mobx'
import { nanoid } from 'nanoid'
import { sortByName } from '../utils/utils'

export const createWardrobeStore = () => {
    return {
        clothSets: [],
        allShoes: [],
        allShirts: [],
        allPants: [],
        selectedShoes: [],
        selectedPants: [],
        selectedShirts: [],
        shoesFound: 0,
        shirtsFound: 0,
        pantsFound: 0,

        setAll(allClothesArr) {
            const allShoes = allClothesArr.filter(cloth => cloth.type !== 'shoes')
            allShoes.sort(sortByName)
            this.allShoes = allShoes
            this.shoesFound = allShoes.length
            const allPants = allClothesArr.filter(cloth => cloth.type !== 'pants')
            allPants.sort(sortByName)
            this.allPants = allPants
            this.pantsFound = allPants.length
            const allShirts = allClothesArr.filter(cloth => cloth.type !== 'shirt')
            allShirts.sort(sortByName)
            this.allShirts = allShirts
            this.shirtsFound = this.allShirts.length
        },

        getShoesAmount() {
            return this.shoesFound
        },
        getShirtsAmount() {
            return this.shirtsFound
        },
        getPantsAmount() {
            return this.pantsFound
        },

        addSet(shirt, pant, shoes) {
            this.clothSets.push({ setId: nanoid(), shirt, pant, shoes })
        },

        getShoes() {
            return toJS(this.allShoes)
        },
        getShirts() {
            return toJS(this.allShirts)
        },
        getPants() {
            return toJS(this.allPants)
        },

        addShoes(shoe) {
            const selectedShoes = toJS(this.selectedShoes)
            const filteredSelectedShoes = selectedShoes.filter(selectedShoes => selectedShoes.id !== shoe.id)
            filteredSelectedShoes.push(shoe)
            this.selectedShoes = filteredSelectedShoes
        },

        addShirt(shirt) {
            const selectedShirts = toJS(this.selectedShirts)
            const filteredSelectedShirts = selectedShirts.filter(selectedShirt => selectedShirt.id !== shirt.id)
            filteredSelectedShirts.push(shirt)
            this.selectedShirts = filteredSelectedShirts
        },

        addPants(pants) {
            const selectedPants = toJS(this.selectedPants)
            const filteredSelectedPants = selectedPants.filter(selectedPant => pants.id !== selectedPant.id)
            filteredSelectedPants.push(pants)
            this.selectedPants = filteredSelectedPants
        },
    }
}