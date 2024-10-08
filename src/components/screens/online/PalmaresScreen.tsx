import {ScrollView, StyleSheet, View} from "react-native";
import UiText from "../../ui-kit/typography/UiText";
import Menu from "../../ui-kit/menu/menu";
import BannerTitle from "../../ui-kit/bannertitle/bannerTitle";

const PalmaresScreen = () => {
    return (
        <View style={styles.container}>
            <Menu/>
            <ScrollView>
                <BannerTitle title={'Le palmarès'} image={'souris-palmares.png'}/>

                <View style={styles.containerScreen}>
                    <UiText color={'black'} fontSize={20} mb={5}>2023-2024</UiText>
                    <UiText color={'black'} fontSize={22}>Steve Georges</UiText>
                </View>

                <View style={styles.containerScreen}>
                    <UiText color={'black'} fontSize={20} mb={5}>2022-2023</UiText>
                    <UiText color={'black'} fontSize={22}>Gaëlle Santy</UiText>
                </View>

                <View style={styles.containerScreen}>
                    <UiText color={'black'} fontSize={20} mb={5}>2021-2022</UiText>
                    <UiText color={'black'} fontSize={22}>Steve Georges</UiText>
                </View>

                <View style={styles.containerScreen}>
                    <UiText color={'black'} fontSize={20} mb={5}>2019-2020</UiText>
                    <UiText color={'black'} fontSize={22}>Samuel Carmiaux</UiText>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#140e32'
    },
    containerScreen: {
        backgroundColor: '#FFDAB9',
        borderWidth: 2,
        borderColor: '#333',
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
});

export default PalmaresScreen;