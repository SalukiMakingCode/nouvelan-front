import {Image, Pressable, StyleSheet, View} from 'react-native';
import UiText from "../typography/UiText";
import {useState} from "react";
import {router} from "expo-router";
import {userConnected} from "../../../graphql";

const Menu = () => {
    const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false);

    const handleBurgerClick = () => {
        setIsBurgerMenuVisible(!isBurgerMenuVisible);
    }

    const handleMenuClick = (route: string) => () => {
        setIsBurgerMenuVisible(false);
        router.replace(route);
    }

    const user = userConnected();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{uri: 'https://hdmnetwork-cdn.s3.fr-par.scw.cloud/nouvelan/img/souris-menu.png'}}
                    style={styles.mouseImage}
                />
                <Pressable onPress={handleBurgerClick}>
                    <Image
                        source={{uri: 'https://hdmnetwork-cdn.s3.fr-par.scw.cloud/nouvelan/img/burger.png'}}
                        style={styles.mouseImage}
                    />
                </Pressable>
            </View>
            {isBurgerMenuVisible && (
                <>
                    <View style={styles.burgerMenu}>
                        <Pressable onPress={handleMenuClick('online/ranking')} style={styles.menuChoice}>
                            <Image
                                source={{uri: "https://hdmnetwork-cdn.s3.fr-par.scw.cloud/nouvelan/img/souris-ranking.png"}}
                                style={styles.photoTitle}/>
                            <UiText template={"menuOption"} style={{fontFamily: 'LuckiestGuy-Regular'}}>
                                Le classement
                            </UiText>
                        </Pressable>
                        <Pressable onPress={handleMenuClick('online/dinnerMenu')} style={styles.menuChoice}>
                            <Image
                                source={{uri: "https://hdmnetwork-cdn.s3.fr-par.scw.cloud/nouvelan/img/souris-menu-repas.png"}}
                                style={styles.photoTitle}/>
                            <UiText template={"menuOption"} style={{fontFamily: 'LuckiestGuy-Regular'}}>
                                Le menu
                            </UiText>
                        </Pressable>
                        <Pressable onPress={handleMenuClick('online/epreuves')} style={styles.menuChoice}>
                            <Image
                                source={{uri: "https://hdmnetwork-cdn.s3.fr-par.scw.cloud/nouvelan/img/souris-event.png"}}
                                style={styles.photoTitle}/>
                            <UiText template={"menuOption"} style={{fontFamily: 'LuckiestGuy-Regular'}}>
                                Les épreuves
                            </UiText>
                        </Pressable>
                    </View>
                    <View style={styles.burgerMenu}>
                        <Pressable onPress={handleMenuClick('online/photo')} style={styles.menuChoice}>
                            <Image
                                source={{uri: "https://hdmnetwork-cdn.s3.fr-par.scw.cloud/nouvelan/img/souris-photo.png"}}
                                style={styles.photoTitle}/>
                            <UiText template={"menuOption"} style={{fontFamily: 'LuckiestGuy-Regular'}}>
                                Les photos
                            </UiText>
                        </Pressable>
                        <Pressable onPress={handleMenuClick('online/palmares')} style={styles.menuChoice}>
                            <Image
                                source={{uri: "https://hdmnetwork-cdn.s3.fr-par.scw.cloud/nouvelan/img/souris-palmares.png"}}
                                style={styles.photoTitle}/>
                            <UiText template={"menuOption"} style={{fontFamily: 'LuckiestGuy-Regular'}}>
                                Le palmarès
                            </UiText>
                        </Pressable>
                        {user.id === 1 && (
                            <Pressable onPress={handleMenuClick('online/admin')} style={styles.menuChoice}>
                                <UiText template={"menuOption"} style={{fontFamily: 'LuckiestGuy-Regular'}}>
                                    Admin
                                </UiText>
                            </Pressable>
                        )}
                        {user.id !== 1 && (
                            <View style={styles.menuChoice}>
                            </View>
                        )}
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFDAB9',
        borderWidth: 2,
        borderColor: '#333',
        width: '95%',
        alignSelf: 'center',
        marginTop: 50,
    },
    header: {
        backgroundColor: '#FFDAB9',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    mouseImage: {
        width: 50,
        height: 50,
    },
    burgerMenu: {
        backgroundColor: '#b19f7c',
        paddingBottom: 10,
        paddingTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    photoTitle: {
        width: 80,
        height: 80,
    },
    menuChoice: {
        width: 100,
        height: 100,
        backgroundColor: '#FFDAB9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
});

export default Menu;
