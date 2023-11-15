import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme';
import { ListItem } from '../components';

// import { ListItem } from '../components/ListItem';
// import { theme } from '../theme';
// import RealmContext from '../realm';

// const { useRealm } = RealmContext;

const Settings = ({ navigation }) => {
    // const realm = useRealm();

    return (
        <View
            style={{
                margin: 16,
                borderRadius: 11,
                overflow: 'hidden',
            }}
        >
            <ListItem
                label="Categories"
                detail={
                    <Ionicons
                        name="ios-chevron-forward"
                        color={colors.white}
                        style={{ opacity: 0.3 }}
                        size={30}
                    />
                }
                onClick={() => {
                    navigation.navigate('Categories');
                }}
            />
            {/* <ListItem
                isDestructive
                label="Erase all data"
                onClick={() => {
                    Alert.alert(
                        'Are you sure?',
                        'This action cannot be undone',
                        [
                            {
                                text: 'Cancel',
                                onPress: () => {},
                                style: 'cancel',
                            },
                            {
                                text: 'Erase data',
                                style: 'destructive',
                                onPress: () => {
                                    realm.write(() => {
                                        realm.deleteAll();
                                    });
                                },
                            },
                        ],
                        {
                            userInterfaceStyle: 'dark',
                        }
                    );
                }}
            /> */}
        </View>
    );
};

export default Settings;
