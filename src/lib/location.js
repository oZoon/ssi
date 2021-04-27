import * as Location from 'expo-location';

export default async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        return {message: 'permission not granted'};
    }
    return await Location.getCurrentPositionAsync({});
}
