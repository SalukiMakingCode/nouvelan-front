import {ScrollView, StyleSheet, View} from "react-native";
import Menu from "../../ui-kit/menu/menu";
import UiText from "../../ui-kit/typography/UiText";
import {DishData, DishDto} from "../../../data/dishData";
import Dish from "../../dish/Dish";
import BannerTitle from "../../ui-kit/bannertitle/bannerTitle";

const DinnerMenuScreen = () => {
    const dinner: DishDto = DishData;
    return (
        <View style={styles.container}>
            <Menu/>
            <ScrollView>
                <BannerTitle title={'Le menu'} image={'souris-menu-repas.png'}/>
                <View style={styles.containerPhoto}>
                    <UiText template={"h1"} textAlign={'center'} color={'black'} mt={10}>
                        Reveillon 2024-2025
                    </UiText>
                    <UiText template={"h2"} textAlign={'center'} color={'black'} mt={10}>
                        Menu
                    </UiText>

                    <Dish props={dinner.aperitif}/>
                    <Dish props={dinner.entreeFroide}/>
                    <Dish props={dinner.soupe}/>
                    <Dish props={dinner.entreeChaude}/>
                    <Dish props={dinner.sorbet}/>
                    <Dish props={dinner.plat}/>
                    <Dish props={dinner.dessert}/>

                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#140e32'
    },
    containerPhoto: {
        backgroundColor: '#FFDAB9',
        borderWidth: 2,
        borderColor: '#333',
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
});

export default DinnerMenuScreen;