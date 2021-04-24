import { toJS } from 'mobx'
import { useObserver } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { CustomButton } from '../../BaseComponents/CustomButton'
import { CustomList } from '../../BaseComponents/CustomList'
import { SelectedProductComponent } from '../../BaseComponents/SelectedProductComponent'
import { View } from '../../BaseComponents/View'
import { useWardrobeStore } from '../../Context/WardrobeContext'
import { getRequest } from '../../RequestManager/BaseRequest'
import { API_URL } from '../../viewableConsts'
import styles from './HomeScreenStyles'

export const HomeScreen = props => {

    const wardrobeStore = useWardrobeStore()

    const [showSuccessButton, setShowSuccessButton] = useState(false)

    useEffect(() => {
        getRequest(API_URL, data => {
            wardrobeStore.setAll(data.results)
        })
    }, [])

    useEffect(() => {
        if (toJS(wardrobeStore.selectedShoes).length !== 0 &&
            toJS(wardrobeStore.selectedShoes).length === toJS(wardrobeStore.selectedShirts).length &&
            toJS(wardrobeStore.selectedShirts).length === toJS(wardrobeStore.selectedPants).length) {
            setShowSuccessButton(true)
        }
        else {
            setShowSuccessButton(false)
        }
    }, [wardrobeStore.selectedShoes, wardrobeStore.selectedShirts, wardrobeStore.selectedPants])

    const navigateToSuccessScreen = () => {
        props.history.push('/success')
    }

    const onDonePress = () => {
        const selectedShoes = toJS(wardrobeStore.selectedShoes)
        const selectedPants = toJS(wardrobeStore.selectedPants)
        const selectedShirts = toJS(wardrobeStore.selectedShirts)
        selectedShoes.forEach((shoe, index) => {
            wardrobeStore.addSet(selectedShirts[index], selectedPants[index], shoe)
        });
        navigateToSuccessScreen()
    }

    return useObserver(() => (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.listContainer}>
                    <CustomList listHeader='selected shirts'>
                        {wardrobeStore.selectedShirts.map(shirt =>
                            <SelectedProductComponent key={shirt.id} product={shirt} productContainerStyle={styles.productContainer} />
                        )}
                    </CustomList>
                </View>
                <View style={styles.listContainer}>
                    <CustomList listHeader='selected pants'>
                        {wardrobeStore.selectedPants.map(pant =>
                            <SelectedProductComponent key={pant.id} product={pant} productContainerStyle={styles.productContainer} />
                        )}
                    </CustomList>
                </View>
                <View style={styles.listContainer}>
                    <CustomList listHeader='selected shoes'>
                        {wardrobeStore.selectedShoes.map(shoe =>
                            <SelectedProductComponent key={shoe.id} product={shoe} productContainerStyle={styles.productContainer} />
                        )}
                    </CustomList>
                </View>
            </View>
            {showSuccessButton && <CustomButton buttonLabel='done' onClick={onDonePress} style={styles.doneButton} />}
        </View>
    ))
}