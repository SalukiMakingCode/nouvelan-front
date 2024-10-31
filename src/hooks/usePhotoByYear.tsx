import {useMemo} from "react";
import {useGetAllPhotosQuery} from "../graphql";

export default function usePhotosByYear() {
    const {data, loading, error, refetch} = useGetAllPhotosQuery();

    console.log(data);

    const photosByYear = useMemo(() => {
        if (!data || !data.getAllPhotos) return {};

        const groupedPhotos = data.getAllPhotos.reduce((acc, photo) => {
            const yearId = photo.yearId;
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

    return {photosByYear, loading, error, refetch};
}
