import {Image, ScrollView, StyleSheet, View} from "react-native";
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
                    <View style={styles.titleYear}>
                        <UiText color={'black'} fontSize={20} mb={5}>2023-2024</UiText>
                    </View>
                    <View style={styles.titlePlayer}>
                        <Image
                            source={{uri: "https://hdmnetwork-cdn.s3.fr-par.scw.cloud/nouvelan/profil/steve.png"}}
                            style={styles.profilImage}
                        />
                        <UiText color={'black'} fontSize={23}>Steve Georges</UiText>
                    </View>
                </View>

                <View style={styles.containerScreen}>
                    <View style={styles.titleYear}>
                        <UiText color={'black'} fontSize={20} mb={5}>2022-2023</UiText>
                    </View>
                    <View style={styles.titlePlayer}>
                        <Image
                            source={{uri: "https://hdmnetwork-cdn.s3.fr-par.scw.cloud/nouvelan/profil/gaelle.png"}}
                            style={styles.profilImage}
                        />
                        <UiText color={'black'} fontSize={23}>Gaëlle Santy</UiText>
                    </View>
                </View>

                <View style={styles.containerScreen}>
                    <View style={styles.titleYear}>
                        <UiText color={'black'} fontSize={20} mb={5}>2021-2022</UiText>
                    </View>
                    <View style={styles.titlePlayer}>
                        <Image
                            source={{uri: "https://hdmnetwork-cdn.s3.fr-par.scw.cloud/nouvelan/profil/steve.png"}}
                            style={styles.profilImage}
                        />
                        <UiText color={'black'} fontSize={23}>Steve Georges</UiText>
                    </View>
                </View>

                <View style={styles.containerScreen}>
                    <View style={styles.titleYear}>
                        <UiText color={'black'} fontSize={20} mb={5}>2019-2020</UiText>
                    </View>
                    <View style={styles.titlePlayer}>
                        <Image
                            source={{uri: "https://hdmnetwork-cdn.s3.fr-par.scw.cloud/nouvelan/profil/sam.png"}}
                            style={styles.profilImage}
                        />
                        <UiText color={'black'} fontSize={23}>Samuel Carmiaux</UiText>
                    </View>
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
        backgroundColor: '#E1B286',
        borderWidth: 2,
        borderColor: '#333',
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    titleYear: {
        backgroundColor: '#FFDAB9',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
    },
    titlePlayer: {
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row',
    },
    profilImage: {
        width: 53,
        height: 53,
        marginRight: 10,
    },
});

export default PalmaresScreen;