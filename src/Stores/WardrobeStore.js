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
        removeSet(setId) {
            this.clothSets.filter(set => set.setId !== setId)
        },

        getShoes() {
            return this.allShoes
        },
        getShirts() {
            return this.allShirts
        },
        getPants() {
            return this.allPants
        },

        addShoes(shoe) {
            this.selectedShoes.push(shoe)
        },
        // removeShoe(shoeId) {
        //     this.shoes = this.shoes.filter(shoe => shoe.shoeId !== shoeId)
        // },

        addShirt(shirt) {
            this.selectedShirts.push(shirt)
        },
        // removeShirt(shirtId) {
        //     this.shirts = this.shirts.filter(shirt => shirt.shirtId !== shirtId)
        // },

        addPants(pants) {
            this.selectedPants.push(pants)
        },
        // removePants(pantsId) {
        //     this.pants = this.pants.filter(pant => pant.pantsId !== pantsId)
        // }
    }
}