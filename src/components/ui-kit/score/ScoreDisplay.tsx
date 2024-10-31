import {useTemplate} from "../../../hooks/useTemplate";
import {Image, StyleSheet, View} from "react-native";
import UiText from "../typography/UiText";

const ScoreDisplay = ({score}: { score: number }) => {
    const template = useTemplate('default');
    const souris = Math.floor(score / 10);
    const pins = score % 10;
    const version = 2;
    if (version === 1) {
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

    if (version === 2) {
        return (
            <View style={styles.scoreContainer}>
                <UiText style={styles.scoreText}>
                    {souris}
                </UiText>
                <Image
                    source={require('../../../../assets/img/souris-score.png')}
                    style={styles.mouseImage}
                />
                <UiText style={styles.scoreText}>
                    {pins}
                </UiText>
                <Image
                    source={require('../../../../assets/img/pins.png')}
                    style={styles.pinsImage}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scoreContainer: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexGrow: 1,
    },
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
        width: 40,
        height: 40,
        marginLeft: 5,
        marginRight: 20,
        borderRadius: 50,
    },
    pinsImage: {
        width: 40,
        height: 40,
        marginLeft: 5,
        marginRight: 5,
    },
    scoreText: {
        color: 'black',
        fontSize: 20,
        width: 10,
    }
})

export default ScoreDisplay;