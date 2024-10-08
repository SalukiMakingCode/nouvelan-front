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
                    source={require('../../../../assets/img/souris-menu.png')}
                    style={styles.mouseImage}
                />
                <Pressable onPress={handleBurgerClick}>
                    <Image
                        source={require('../../../../assets/img/burger.png')}
                        style={styles.mouseImage}
                    />
                </Pressable>
            </View>
            {isBurgerMenuVisible && (
                <View style={styles.burgerMenu}>
                    <Pressable onPress={handleMenuClick('online/ranking')}>
                        <UiText template={"menuOption"}>
                            Le classement
                        </UiText>
                    </Pressable>
                    <Pressable onPress={handleMenuClick('online/dinnerMenu')}>
                        <UiText template={"menuOption"}>
                            Le menu
                        </UiText>
                    </Pressable>
                    <Pressable onPress={handleMenuClick('online/epreuves')}>
                        <UiText template={"menuOption"}>
                            Les épreuves
                        </UiText>
                    </Pressable>
                    <Pressable onPress={handleMenuClick('online/photo')}>
                        <UiText template={"menuOption"}>
                            Les photos
                        </UiText>
                    </Pressable>
                    <Pressable onPress={handleMenuClick('online/palmares')}>
                        <UiText template={"menuOption"}>
                            Le palmarès
                        </UiText>
                    </Pressable>
                    {user.id === 1 && (
                        <Pressable onPress={handleMenuClick('online/admin')}>
                            <UiText template={"menuOption"}>
                                Admin
                            </UiText>
                        </Pressable>
                    )}
                </View>
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
        marginTop: 10,
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
        backgroundColor: '#FFDAB9',
        marginBottom: 10,
    }
});

export default Menu;
