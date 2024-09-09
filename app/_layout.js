import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import* as SplashScreen from 'expo-splash-screen';

const Layout = () => {
    const [fontsLoaded] = useFonts({
        'DMSans-Bold': require('../assets/fonts/DMSans-Bold.ttf'),
        'DMSans-Medium': require('../assets/fonts/DMSans-Medium.ttf'),
        'DMSans-Regular': require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
           await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return <Stack onLayout={onLayoutRootView} />;
    
    return <Stack />;
};

export default Layout;