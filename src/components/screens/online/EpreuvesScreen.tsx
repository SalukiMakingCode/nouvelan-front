import Menu from "../../ui-kit/menu/menu";
import {ScrollView, StyleSheet, View} from 'react-native';
import UiText from "../../ui-kit/typography/UiText";
import {EpreuveData, EpreuveDto} from "../../../data/epreuveData";
import EventComponent from "../../event/event";
import BannerTitle from "../../ui-kit/bannertitle/bannerTitle";

const EpreuvesScreen = () => {
    const epreuves: EpreuveDto[] = EpreuveData;

    return (
        <View style={styles.container}>
            <Menu/>
            <ScrollView>
                <BannerTitle title={'Les épreuves'} image={'souris-event.png'}/>
                <View style={styles.containerEpreuve}>
                    {epreuves.map((epreuve) => (
                        <View key={epreuve.year}>
                            <UiText key={epreuve.year} template={"h1"} textAlign={'center'} color={'black'} mt={10}>
                                {epreuve.year}
                            </UiText>
                            {epreuve.aperitif && (
                                <EventComponent epreuve={epreuve.aperitif}/>
                            )}

                            {epreuve.entreeFroide && (
                                <EventComponent epreuve={epreuve.entreeFroide}/>
                            )}

                            {epreuve.soupe && (
                                <EventComponent epreuve={epreuve.soupe}/>
                            )}

                            {epreuve.entreeChaude && (
                                <EventComponent epreuve={epreuve.entreeChaude}/>
                            )}

                            {epreuve.sorbet && (
                                <EventComponent epreuve={epreuve.sorbet}/>
                            )}

                            {epreuve.plat && (
                                <EventComponent epreuve={epreuve.plat}/>
                            )}

                            {epreuve.dessert && (
                                <EventComponent epreuve={epreuve.dessert}/>
                            )}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

export default EpreuvesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#140e32'
    },
    containerEpreuve: {
        backgroundColor: '#FFDAB9',
        borderWidth: 2,
        borderColor: '#333',
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
});