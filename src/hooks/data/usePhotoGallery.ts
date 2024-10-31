import * as ImagePicker from 'expo-image-picker';
import {useState} from 'react';

export default function usePhotoGallery() {
    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const [imageLoading, setImageLoading] = useState(false);

    const pickPhotoFromGallery = async () => {
        try {
            setImageLoading(true);

            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                quality: 1,
                allowsEditing: true,
            });

            if (result.canceled) {
                return;
            }

            setPhotoUri(result.assets[0].uri);
        } catch (error) {
            console.error("Erreur lors de la sélection de l'image:", error);
        } finally {
            setImageLoading(false);
        }
    }

    return {
        pickPhotoFromGallery,
        resetPhotoUri: () => setPhotoUri(null),
        imageLoading,
        photoUri
    };
}
