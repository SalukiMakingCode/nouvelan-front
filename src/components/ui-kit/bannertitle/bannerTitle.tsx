import {Image, StyleSheet, View} from "react-native";
import UiText from "../typography/UiText";

interface Props {
    title: string;
    image: string;
}

const BannerTitle = ({title, image}: Props) => {
    const imageUrl = "uri : '../../../../assets/img/" + image;
    return (
        <View style={styles.containerScreen}>
            <Image source={imageUrl} style={styles.photoTitle}/>
            <UiText color={'black'} fontSize={24}>{title}</UiText>
        </View>
    )
}

const styles = StyleSheet.create({
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
    photoTitle: {
        width: 50,
        height: 50,
    },
});


export default BannerTitle;