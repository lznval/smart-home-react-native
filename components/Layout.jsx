import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', // цвет заднего фона
        paddingHorizontal: 16, // отступы от границ экрана по горизонтали
    },
});

const Layout = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};

export default Layout;
