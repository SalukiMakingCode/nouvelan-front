import {useState} from 'react';
import useFileUpload from '../useFileUpload';

export default function usePhotoUploader() {
    const [isUploading, setIsUploading] = useState(false);
    const [uploadFile] = useFileUpload();

    const save = async (uri: string) => {
        try {
            setIsUploading(true);

            const uploadedMainPhoto = await uploadFile(uri, `/img/photo`);

            if (uploadedMainPhoto === false) {
                console.error("Erreur lors du téléchargement de l'image");

                return;
            }

            return {uploadedFile: uploadedMainPhoto};
        } catch (error) {
            console.error("Erreur lors de la sélection de l'image:", error);
        } finally {
            setIsUploading(false);
        }
    };

    return { uploadPhoto: save, isUploading };
}
