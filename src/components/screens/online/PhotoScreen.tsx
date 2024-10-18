import Menu from "../../ui-kit/menu/menu";
import UiText from "../../ui-kit/typography/UiText";
import usePhotosByYear from "../../../hooks/usePhotoByYear";
import {Image, Pressable, ScrollView, StyleSheet, View} from 'react-native';
import BannerTitle from "../../ui-kit/bannertitle/bannerTitle";
import useArticlePhotoUploader from "../../../hooks/data/useArticlePhotoUploader";
import usePhotoGallery from "../../../hooks/data/usePhotoGallery";
import {useEffect, useState} from "react";

const PhotoScreen = () => {
    const {photosByYear, loading, error} = usePhotosByYear();
    const {uploadArticlePhotos, isUploading} = useArticlePhotoUploader();
    const {
        pickPhotoFromGallery, takePhotoWithCamera, photoUri, imageLoading, resetPhotoUri,
    } = usePhotoGallery();
    const [isMenuAddPhotoOpen, setIsMenuAddPhotoOpen] = useState(false);

    useEffect(() => {
        (async () => {
            if (!photoUri) {
                return;
            }

            setIsMenuAddPhotoOpen(false);

            await uploadArticlePhotos(photoUri);
            //await refetchArticle(); todo refresh
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
                                <UiText template={"h1"} textAlign={'center'} color={'black'}>
                                    {photosByYear[yearId][0].year.year}
                                </UiText>

                                <View style={styles.photoContainer}>
                                    {photosByYear[yearId].map((photo) => (
                                        <View key={photo.id} style={styles.photoItem}>
                                            <Image
                                                source={{uri: 'https://hdmnetwork-cdn.s3.fr-par.scw.cloud/nouvelan/img/photo/' + photo.link}}
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
        backgroundColor: '#FFDAB9',
        borderWidth: 2,
        borderColor: '#333',
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
        marginTop: 10,
        paddingBottom: 20,
        paddingTop: 20,
    },
    yearSection: {
        marginBottom: 20,
    },
    photoContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    photoItem: {
        width: 280,
        height: 230,
        margin: 10,
    },
    photo: {
        width: '100%',
        height: '100%',
    },
    addPhotoImage: {
        width: 100,
        height: 100,
    }
});


export default PhotoScreen;
