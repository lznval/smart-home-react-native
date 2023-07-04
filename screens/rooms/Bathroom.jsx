import React from 'react';
import {Button, Text, View} from "react-native";
import Layout from "../../components/Layout";

const Bathroom = ({navigation}) => {
    return (
        <Layout>
            <Text>Bathroom screen</Text>
            <Button title='Go back' onPress={() => navigation.goBack()} />
        </Layout>
    );
};

export default Bathroom;