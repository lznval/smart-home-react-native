import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from "react-native";
import Layout from "../../components/Layout";

const Kitchen = ({navigation}) => {
    return (
        <Layout>
            <Text>Kitchen screen</Text>
            <Button title='Go back' onPress={() => navigation.goBack()} />
        </Layout>
    );
};

export default Kitchen;