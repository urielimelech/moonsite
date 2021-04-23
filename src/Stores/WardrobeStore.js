import { nanoid } from 'nanoid'
import Cloth from '../DataObjects/cloth'

export const createWardrobeStore = () => {
    return {
        all: [],
        clothSets: [],
        shoes: [],
        shirts: [],
        pants: [],
        setAll(allClothesArr) {
            allClothesArr.forEach(cloth => {
                this.all.push(new Cloth(cloth))
            })
            this.shoes = this.all.filter(cloth => cloth.type !== 'shoes')
            this.pants = this.all.filter(cloth => cloth.type !== 'pants')
            this.shirts = this.all.filter(cloth => cloth.type !== 'shirt')
            console.log(this.all)
        },
        removeAll() {
            this.all = []
        },
        getAll() {
            return this.all
        },

        addSet(shirtName, pantName, shoeName) {
            this.clothSets.push({ setId: nanoid(), shirt: shirtName, pant: pantName, shoe: shoeName })
        },
        removeSet(setId) {
            this.clothSets.filter(set => set.setId !== setId)
        },

        addShoes(shoe) {
            this.shoes.push(shoe)
        },
        // removeShoe(shoeId) {
        //     this.shoes = this.shoes.filter(shoe => shoe.shoeId !== shoeId)
        // },

        addShirt(shirt) {
            this.shirts.push(shirt)
        },
        // removeShirt(shirtId) {
        //     this.shirts = this.shirts.filter(shirt => shirt.shirtId !== shirtId)
        // },

        addPants(pants) {
            this.pants.push(pants)
        },
        // removePants(pantsId) {
        //     this.pants = this.pants.filter(pant => pant.pantsId !== pantsId)
        // }
    }
}