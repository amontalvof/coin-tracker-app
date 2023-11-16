import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Add, Expenses, Reports, Settings } from './src/screens';
import { theme } from './src/theme';
import { TabBarIcon } from './src/components';

const Tab = createBottomTabNavigator();

const barStyleOptions =
    Platform.OS === 'android'
        ? { height: 60, paddingBottom: 10 }
        : { height: 90, paddingBottom: 40 };

export default function App() {
    return (
        <NavigationContainer theme={theme}>
            <StatusBar style="light" />
            <Tab.Navigator
                screenOptions={{
                    tabBarIcon: TabBarIcon,
                    tabBarActiveTintColor: theme.colors.primary,
                    tabBarInactiveTintColor: theme.colors.border,
                    tabBarStyle: {
                        backgroundColor: theme.colors.card,
                        borderTopWidth: 0,
                        elevation: 0,
                        paddingTop: 10,
                        ...barStyleOptions,
                    },
                }}
            >
                <Tab.Screen name="Expenses" component={Expenses} />
                <Tab.Screen name="Reports" component={Reports} />
                <Tab.Screen name="Add" component={Add} />
                <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
