import {useGetAllPhotoQuery} from "../graphql";
import {useMemo} from "react";

export default function usePhotosByYear() {
    const {data, loading, error} = useGetAllPhotoQuery();

    const photosByYear = useMemo(() => {
        if (!data || !data.getAllPhotos) return {};

        const groupedPhotos = data.getAllPhotos.reduce((acc, photo) => {
            const yearId = photo.year.id;
            if (!acc[yearId]) {
                acc[yearId] = [];
            }
            acc[yearId].push(photo);
            return acc;
        }, {});

        return Object.keys(groupedPhotos)
            .sort((a, b) => Number(b) - Number(a))
            .reduce((acc, key) => {
                acc[key] = groupedPhotos[key];
                return acc;
            }, {});
    }, [data]);

    return {photosByYear, loading, error};
}
