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
            <View style={styles.containerTitle}>
                <Image source={(imageUrl)} style={styles.image}/>
                <UiText template={"h1"} textAlign={'center'} color={'black'} style={styles.containerTitleH1}>
                    {props.props.title}
                </UiText>
            </View>

            <UiText template={"h3"} textAlign={'center'} color={'black'} mt={15} mb={15} w={320}>
                {props.props.name}
            </UiText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efc094',
        marginBottom: 20,
        marginLeft: 6,
        marginRight: 6,
    },
    image: {
        width: 100,
        height: 100,
        marginLeft: 5,
    },
    containerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e1b286',
        flex: 1,
        width: 320,
    },
    containerTitleH1: {
        flex: 1,
        marginBottom: 0,
        textAlignVertical: 'center',
    },
});

export default Dish;