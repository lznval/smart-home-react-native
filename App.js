import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, FlatList, RefreshControl, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from "react";
import axios from "axios";
import Navigation from "./screens/Navigation";
import Preloader from "./components/Preloader";

export default function App() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        setIsLoading(true)
        axios.get('https://649acae3bf7c145d02397b10.mockapi.io/users')
            .then((response) => {
                const data = response.data
                setItems(data)
            }).catch((error) => {
            console.log(error)})
            .finally(() => {
                setIsLoading(false)
            })
    };

    useEffect(fetchData, []);

    if (isLoading) {
        return <Preloader />
    }

    return (
        <Navigation>
            <SafeAreaView style={{backgroundColor: 'red'}}></SafeAreaView>
        </Navigation>
    );
}
