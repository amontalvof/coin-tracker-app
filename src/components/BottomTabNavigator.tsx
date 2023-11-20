import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../theme';
import TabBarIcon from './TabBarIcon';
import Expenses from '../screens/Expenses';
import Reports from '../screens/Reports';
import Add from '../screens/Add';
import Settings from '../screens/Settings';
import RootStackParamList from '../types/rootStackParamList';

const Tab = createBottomTabNavigator<RootStackParamList>();

const barStyleOptions =
    Platform.OS === 'android'
        ? { height: 60, paddingBottom: 10 }
        : { height: 90, paddingBottom: 40 };

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Expenses"
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
    );
};

export default BottomTabNavigator;
