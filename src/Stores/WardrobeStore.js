import { nanoid } from 'nanoid'

export const createWardrobeStore = () => {
    return {
        clothSets: [],
        shoes: [],
        shirts: [],
        pants: [],
        addSet(shirtName, pantName, shoeName) {
            this.clothSets.push({ setId: nanoid(), shirt: shirtName, pant: pantName, shoe: shoeName })
        },
        removeSet(setId) {
            this.clothSets.filter(set => set.setId !== setId)
        },

        addShoes(shoeName) {
            this.shoes.push({ shoeName, shoeId: nanoid() })
        },
        removeShoe(shoeId) {
            this.shoes = this.shoes.filter(shoe => shoe.shoeId !== shoeId)
        },

        addShirt(shirtName) {
            this.shirts.push({ shirtName, shirtId: nanoid() })
        },
        removeShirt(shirtId) {
            this.shirts = this.shirts.filter(shirt => shirt.shirtId !== shirtId)
        },

        addPants(pantsName) {
            this.pants.push({ pantsName, pantsId: nanoid() })
        },
        removePants(pantsId) {
            this.pants = this.pants.filter(pant => pant.pantsId !== pantsId)
        }
    }
}