import {EpreuvePlatDto} from "../../data/epreuveData";
import UiText from "../ui-kit/typography/UiText";
import {Image, StyleSheet, View} from "react-native";
import imageMapper from "../ui-kit/utils/imageEventMapper";
import {Audio, Video} from "expo-av";
import {useEffect, useState} from "react";
import UiButton from "../ui-kit/form/UiButton";

const EventComponent = ({epreuve}: { epreuve: EpreuvePlatDto }) => {
    const imageUrl = imageMapper[epreuve.image];
    const videoUrl = "https://hdmnetwork-cdn.s3.fr-par.scw.cloud/nouvelan/video/" + epreuve.video;
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const loadSound = async () => {
        if (epreuve.wav && epreuve.wav === "2019-apero.wav") {
            const {sound} = await Audio.Sound.createAsync(
                require(`../../../assets/wav/2019-apero.wav`)
            );
            setSound(sound);
        }

        if (epreuve.wav && epreuve.wav === "film.wav") {
            const {sound} = await Audio.Sound.createAsync(
                require(`../../../assets/wav/film.wav`)
            );
            setSound(sound);
        }
    };

    const playSound = async () => {
        if (sound && !isPlaying) {
            await sound.playAsync();
            setIsPlaying(true);
        }
    };

    const stopSound = async () => {
        if (sound && isPlaying) {
            await sound.stopAsync();
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        loadSound();
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Image source={{uri: imageUrl}} style={styles.image}/>
                <UiText template={"h1"} textAlign={'center'} color={'black'} style={styles.containerTitleH1}>
                    {epreuve.title}
                </UiText>
            </View>

            <UiText template={"h2"} textAlign={'center'} color={'black'} mt={10} pb={5}>
                {epreuve.name}
            </UiText>

            {epreuve.video && (
                <View style={styles.containerVideo}>
                    <Video
                        source={{uri: videoUrl}}
                        useNativeControls
                        isMuted={false}
                        style={{width: 320, aspectRatio: 16 / 9}}
                        resizeMode="cover"
                    />
                </View>
            )}

            {epreuve.wav && (
                <View>
                    <UiButton text="Jouer le son" onPress={playSound} disabled={isPlaying} mt={5}/>
                    <UiButton text="Arrêter le son" onPress={stopSound} disabled={!isPlaying} mt={5} mb={10}/>
                </View>
            )}
        </View>
    )
}

export default EventComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efc094',
        marginLeft: 6,
        marginRight: 6,
        width: '100%',
    },
    image: {
        width: 100,
        height: 100,
        marginLeft: 5,
    },
    containerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#e1b286',
        backgroundColor: '#FFDAB9',

    },
    containerTitleH1: {
        flex: 1,
        marginBottom: 0,
        textAlignVertical: 'center',
    },
    containerVideo: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        textAlign: 'center',
    }
});
