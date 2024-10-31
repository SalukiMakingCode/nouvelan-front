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
                        <View key={epreuve.year} style={styles.yearEpreuve}>
                            <UiText key={epreuve.year} template={"h1"} textAlign={'center'} color={'black'} mt={10}
                                    style={{fontFamily: 'LuckiestGuy-Regular', fontSize: 30}}>
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
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    yearEpreuve: {
        // backgroundColor: '#FFDAB9',
        backgroundColor: '#E1B286',
        borderRadius: 10,
        marginBottom: 50,
        width: '100%',
        alignItems: 'center',
    }
});