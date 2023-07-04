import React, {useEffect, useState} from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import Layout from "../../components/Layout";
import Svg, {Polygon, SvgXml} from "react-native-svg";
import styled from "styled-components/native";
import Slider from "@react-native-community/slider";
import { ColorPicker } from 'react-native-color-picker'


const Kitchen = ({navigation}) => {
    const [brightness, setBrightness] = useState(50); // Насыщенность света
    const [color, setColor] = useState("");
    const handleBrightnessChange = (value) => {
        setBrightness(value);
    };

    const handleColor = (value) => {
        setColor(value)
    };

    return (
        <Layout>
            <Text>Kitchen screen</Text>
            {/*<View style={{position: 'relative', height: 400}}>*/}
            {/*    <KitchenImage source={require('../../assets/lamp/lamp-main.png')} />*/}
            {/*    <KitchenSVG>*/}
            {/*        <Svg height="100" width="150">*/}
            {/*            <Polygon*/}
            {/*                points="10 0, 140 0, 150 100, 0 100"*/}
            {/*                fill={`rgba(0, 0, 0, ${brightness / 100})`}*/}
            {/*            />*/}
            {/*        </Svg>*/}
            {/*    </KitchenSVG>*/}
            {/*</View>*/}
            {/*<Slider*/}
            {/*    minimumValue={0}*/}
            {/*    maximumValue={100}*/}
            {/*    value={brightness}*/}
            {/*    onValueChange={handleBrightnessChange}*/}
            {/*/>*/}
            <Text>{brightness}</Text>
            <Text>{color}</Text>
            <ColorPicker
                onInteractionStart={(color) => alert(color)}
                thumbSize={40}
                sliderSize={40}
                style={{width: 100, height: 100}}
            />

        </Layout>
    );
};

const KitchenImage = styled.Image`
  position: absolute;
  top: 0;
  right: 30px;
  width: 150px;
  object-fit: contain;
`;

const KitchenSVG = styled.View`
  position: absolute;
  right: 30px;
  bottom: 80px;
`;

export default Kitchen;



