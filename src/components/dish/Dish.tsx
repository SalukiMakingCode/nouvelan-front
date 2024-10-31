import {OneDishDto} from "../../data/dishData";
import {Image, StyleSheet, View} from "react-native";
import UiText from "../ui-kit/typography/UiText";
import imageMapper from "../ui-kit/utils/imageEventMapper";

class Props {
    props: OneDishDto;
}

const Dish = (props: Props) => {
    const imageUrl = imageMapper[props.props.image];

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Image source={{uri: imageUrl}} style={styles.image}/>

                <View style={styles.titleContainer}>
                    <UiText template={"h1"} textAlign={'center'} color={'black'} fontSize={28}>
                        {props.props.title}
                    </UiText>
                </View>
            </View>

            <UiText template={"h3"} textAlign={'center'} color={'black'} mt={15} mb={15}>
                {props.props.name}
            </UiText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E1B286',
        marginBottom: 20,
        borderRadius: 10,
        width: '100%',
    },
    image: {
        width: 100,
        height: 100,
        marginLeft: 10,
        alignSelf: 'center',
    },
    title: {
        flexDirection: 'row',
        backgroundColor: '#FFDAB9',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    }
});

export default Dish;