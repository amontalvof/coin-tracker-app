import React, { useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { colors, theme } from '../theme';

type ListItemProps = {
    label: string;
    detail: React.ReactNode;
    onClick?: () => void;
    swipeToDelete: boolean;
    onDelete?: () => void;
    isDestructive?: boolean;
};

const ListItem = (props: ListItemProps) => {
    const { label, detail, onClick, swipeToDelete, onDelete, isDestructive } =
        props;

    const item = useMemo(
        () => (
            <TouchableOpacity
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: detail ? 'space-between' : 'flex-start',
                    alignItems: 'center',
                    minHeight: 44,
                    paddingHorizontal: 12,
                    borderBottomWidth: 1,
                    borderBottomColor: theme.colors.border,
                    backgroundColor: theme.colors.card,
                }}
                onPress={onClick}
                disabled={!onClick}
            >
                <Text
                    style={{
                        fontSize: 16,
                        color: isDestructive ? colors.red : colors.white,
                    }}
                >
                    {label}
                </Text>
                {detail}
            </TouchableOpacity>
        ),
        [label, detail]
    );

    const rightActions = () => (
        <TouchableOpacity
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 100,
            }}
            onPress={onDelete}
        >
            <Text style={{ color: 'white' }}>Delete</Text>
        </TouchableOpacity>
    );

    const handleSwipeableOpen = (direction: 'left' | 'right') => {
        if (direction === 'right' && onDelete) {
            onDelete();
        }
    };

    if (swipeToDelete) {
        return (
            <Swipeable
                renderRightActions={rightActions}
                onSwipeableOpen={handleSwipeableOpen}
            >
                {item}
            </Swipeable>
        );
    }
    return item;
};

export default ListItem;
