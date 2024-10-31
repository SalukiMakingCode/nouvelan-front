import Menu from "../../ui-kit/menu/menu";
import {Image, ScrollView, StyleSheet, View} from "react-native";
import UiText from "../../ui-kit/typography/UiText";

const HomeScreen = () => {
    const imageUrl = "https://hdmnetwork-cdn.s3.fr-par.scw.cloud/nouvelan/img/accueil.webp";
    return (
        <View style={styles.container}>
            <Menu/>
            <ScrollView>
                <View style={styles.containerText}>
                    <UiText style={styles.text}>
                        Bienvenue sur l'application des petites souris !
                    </UiText>
                </View>
                <View style={styles.containerText}>
                    <Image source={{uri: imageUrl}} style={styles.photoTitle}/>
                </View>
                <View style={styles.containerText}>
                    <UiText style={styles.text2}>
                        Bon reveillon à tous !
                    </UiText>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#140e32'
    },
    containerText: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center',
    },
    text: {
        fontFamily: 'LuckiestGuy-Regular',
        fontSize: 40,
        textAlign: 'center',
    },
    text2: {
        fontFamily: 'LuckiestGuy-Regular',
        fontSize: 25,
        textAlign: 'center',
    },
    photoTitle: {
        width: '100%',
        height: 300,
    }
});

export default HomeScreen;
