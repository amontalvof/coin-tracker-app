import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/theme';
import BottomTabNavigator from './src/components/BottomTabNavigator';
import Categories from './src/screens/Categories';
import RootStackParamList from './src/types/rootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer theme={theme}>
            <StatusBar style="light" />
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home"
                    component={BottomTabNavigator}
                />
                <Stack.Screen
                    name="Categories"
                    component={Categories}
                    options={{ title: 'Categories', headerBackTitle: 'Back' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
