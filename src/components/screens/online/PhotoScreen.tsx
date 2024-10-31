import Menu from "../../ui-kit/menu/menu";
import UiText from "../../ui-kit/typography/UiText";
import usePhotosByYear from "../../../hooks/usePhotoByYear";
import {Image, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import BannerTitle from "../../ui-kit/bannertitle/bannerTitle";
import usePhotoUploader from "../../../hooks/data/usePhotoUploader";
import usePhotoGallery from "../../../hooks/data/usePhotoGallery";
import {useEffect, useState} from "react";
import {useSavePhotoMutation} from "../../../graphql";

const PhotoScreen = () => {
    const {photosByYear, loading, error, refetch: refetchPhotoByYear} = usePhotosByYear();
    const {uploadPhoto, isUploading} = usePhotoUploader();
    const [savePhoto] = useSavePhotoMutation()
    const {
        pickPhotoFromGallery, photoUri
    } = usePhotoGallery();
    const [isMenuAddPhotoOpen, setIsMenuAddPhotoOpen] = useState(false);

    useEffect(() => {
        (async () => {
            if (!photoUri) {
                return;
            }

            setIsMenuAddPhotoOpen(false);
            const file = await uploadPhoto(photoUri);
            await savePhoto({variables: {dto: {imageFileId: file?.uploadedFile.id}}});
            refetchPhotoByYear();
        })();
    }, [photoUri]);

    if (loading) {
        return <UiText>Loading...</UiText>;
    }

    if (error) {
        return <UiText>Error loading photos.</UiText>;
    }

    return (
        <View style={styles.container}>
            <Menu/>
            <ScrollView>
                <BannerTitle title={'Les photos'} image={'souris-photo.png'}/>
                <Pressable style={styles.addPhotoContainer} onPress={pickPhotoFromGallery}>
                    <Image source={{uri: 'https://hdmnetwork-cdn.s3.fr-par.scw.cloud/nouvelan/img/add-photo.png'}}
                           style={styles.addPhotoImage}/>
                </Pressable>
                <View style={styles.containerPhoto}>
                    {Object.keys(photosByYear)
                        .sort((a, b) => Number(b) - Number(a))
                        .map((yearId) => (
                            <View key={yearId} style={styles.yearSection}>
                                <View style={styles.titleContainer}>
                                    <UiText template={"h1"} textAlign={'center'} color={'black'}
                                            style={{fontFamily: 'LuckiestGuy-Regular', fontSize: 30}}>
                                        {photosByYear[yearId][0].year.year}
                                    </UiText>
                                </View>

                                <View style={styles.photoContainer}>
                                    {photosByYear[yearId].map((photo) => (
                                        <View key={photo.id} style={styles.photoItem}>
                                            <Image
                                                source={{uri: photo.image.uri}}
                                                style={styles.photo}
                                            />
                                            <UiText>{photo.comment}</UiText>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#140e32'
    },
    containerPhoto: {
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    addPhotoContainer: {
        backgroundColor: '#FFDAB9',
        borderWidth: 2,
        borderColor: '#333',
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 20,
        borderRadius: 10,
    },
    yearSection: {
        marginBottom: 40,
        backgroundColor: '#FFDAB9',
        borderRadius: 10,
    },
    photoContainer: {
        backgroundColor: '#FFDAB9',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 10,
    },
    photoItem: {
        width: 300,
        height: 250,
        margin: 10,
    },
    photo: {
        width: '100%',
        height: '100%',
    },
    addPhotoImage: {
        width: 100,
        height: 100,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E1B286',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingTop: 10,
    }
});


export default PhotoScreen;
