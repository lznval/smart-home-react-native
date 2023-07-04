import React from 'react';
import {ActivityIndicator, Text, View} from "react-native";

const Preloader = () => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <ActivityIndicator size='large' />
            <Text>Download...</Text>
        </View>
    );
};

export default Preloader;