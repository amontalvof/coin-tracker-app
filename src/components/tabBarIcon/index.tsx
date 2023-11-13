import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type TabBarIconProps = {
    focused: boolean;
    color: string;
    size: number;
};

const TabBarIcon = ({ focused, color, size }: TabBarIconProps) => {
    const route = useRoute();
    let iconName;

    switch (route.name) {
        case 'Expenses':
            iconName = focused ? 'ios-wallet' : 'ios-wallet-outline';
            break;
        case 'Settings':
            iconName = focused ? 'ios-list' : 'ios-list-outline';
            break;
        case 'Add':
            iconName = focused ? 'ios-add' : 'ios-add-outline';
            break;
        case 'Reports':
            iconName = focused ? 'ios-bar-chart' : 'ios-bar-chart-outline';
            break;
        default:
            iconName = '';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
};

export default TabBarIcon;
