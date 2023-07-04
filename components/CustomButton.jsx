import React from 'react';
import { Pressable, StyleSheet, Text} from "react-native";
import styled from 'styled-components/native';

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 30,
        backgroundColor: '#464646',
        borderRadius: 15,
        color: 'black',
        fontSize: 16,
        textTransform: 'lowercase'
    }
});

const PressableButton = styled.Pressable`
  width: 100%;
  height: 30px;
  background-color: #464646;
  border-radius: 15px;
  padding: 5px;
`;

const PressableButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

const CustomButton = ({navigation, title, path}) => {
    return (
        <PressableButton onPress={() => navigation.navigate(path)}>
            <PressableButtonText>
                {title}
            </PressableButtonText>
        </PressableButton >
    );
};

export default CustomButton;