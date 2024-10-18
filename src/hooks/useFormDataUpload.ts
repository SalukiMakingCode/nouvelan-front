import {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

type Return = [(formData: FormData, uri: string) => Promise<any>, { loading: boolean }];

export default function useFormDataUpload(): Return {
    const [isUploading, setIsUploading] = useState(false);

    const upload = async (formData: FormData, uri: string): Promise<any | false> => {
        try {
            setIsUploading(true);

            const token = await AsyncStorage.getItem('@boilerplateapp_token');

            if (!token || token === '') {
                throw new Error('Token is missing');
            }

            const headers = new Headers();

            headers.append('Authorization', `Bearer ${token}`);
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'multipart/form-data');

            const requestOptions = {
                method: 'POST',
                headers,
                body: formData,
            };

            const response = await fetch(`${Constants.expoConfig?.extra!['api-rest']}${uri}`, requestOptions);

            return response.json();
        } catch (error) {
            console.log(error);
            return false;
        } finally {
            setIsUploading(false);
        }
    };

    return [async (formData: FormData, uri: string) => {
        let uploadTrials = 0;

        while (uploadTrials++ <= 10) {
            const fileUploaded = await upload(formData, uri);

            if (fileUploaded) {
                return fileUploaded;
            }
        }
    }, {loading: isUploading}]
}
