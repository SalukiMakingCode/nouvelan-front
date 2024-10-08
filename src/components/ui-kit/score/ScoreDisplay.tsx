import {useTemplate} from "../../../hooks/useTemplate";
import {Image, StyleSheet, View} from "react-native";

const ScoreDisplay = ({score}: { score: number }) => {
    const template = useTemplate('default');
    const souris = Math.floor(score / 10);
    const pins = score % 10;
    return (
        <View>
            <View style={styles.containerSouris}>
                {Array(souris).fill(0).map((_, index) => (
                    <Image
                        key={`souris-${index}`}
                        source={require('../../../../assets/img/souris-score.png')}
                        style={styles.mouseImage}
                    />
                ))}
            </View>

            <View style={styles.containerPins}>
                {Array(pins).fill(0).map((_, index) => (
                    <Image
                        key={`pins-${index}`}
                        source={require('../../../../assets/img/pins.png')}
                        style={styles.pinsImage}
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    containerSouris: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        flexWrap: 'wrap',
    },
    containerPins: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        flexWrap: 'wrap',
    },
    mouseImage: {
        width: 45,
        height: 45,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
    },
    pinsImage: {
        width: 25,
        height: 25,
        marginLeft: 2,
        marginRight: 2,
    },
})

export default ScoreDisplay;