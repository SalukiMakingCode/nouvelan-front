import {useState} from 'react';
import {useSaveArticlePhotosMutation} from '../../graphql';
import useFileUpload from '../useFileUpload';

export default function useArticlePhotoUploader() {
    const [isUploading, setIsUploading] = useState(false);
    const [uploadFile] = useFileUpload();
    const [saveArticlePhotos] = useSaveArticlePhotosMutation();

    const save = async (uri: string) => {
        try {
            setIsUploading(true);

            const uploadedMainPhoto = await uploadFile(uri, `/img/photo/`);

            if (uploadedMainPhoto === false) {
                console.error("Erreur lors du téléchargement de l'image");

                return;
            }

            await saveArticlePhotos({
                variables: {
                    dto: {
                        imageFileId: uploadedMainPhoto.id,
                    },
                },
            });

            return {uploadedFile: uploadedMainPhoto};
        } catch (error) {
            console.error("Erreur lors de la sélection de l'image:", error);
        } finally {
            setIsUploading(false);
        }
    };

    return {uploadArticlePhotos: save, isUploading};
}
