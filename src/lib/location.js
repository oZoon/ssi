import * as Location from 'expo-location';

export default async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        return false;
    }
    return await Location.getCurrentPositionAsync({});
}
