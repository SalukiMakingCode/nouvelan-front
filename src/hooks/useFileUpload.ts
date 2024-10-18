import useFormDataUpload from "./useFormDataUpload";

type Return = [(file: string, path?: string, width?: number, height?: number) => Promise<any>, { loading: boolean }];

export default function useFileUpload(): Return {
    const [formDataUpload, {loading}] = useFormDataUpload();

    return [async (file: string, path = '', width = 500, height: number | undefined = undefined) => {
        const fileType = file.split('.').pop();
        const formData = new FormData();

        formData.append('file', {
            uri: file,
            type: `image/${fileType}`,
            name: `image.${fileType}`,
        } as any);

        formData.append('path', path);
        formData.append('width', String(width));

        if (height) {
            formData.append('height', String(height));
        }

        return formDataUpload(formData, '/file/upload');
    }, {loading}]
}
