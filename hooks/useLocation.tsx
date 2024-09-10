import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState<{
    latitude: string;
    longitude: string;
  }>();

  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) return;
    const {
      coords: { latitude, longitude },
    } = await Location.getLastKnownPositionAsync();
    setLocation({ latitude, longitude });
    console.log(location);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { location };
};

export default useLocation;
