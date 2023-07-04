import {View, Text, Button, Image} from "react-native";
import Layout from "../../components/Layout";
import styled from "styled-components/native";
import CustomButton from "../../components/CustomButton";

const Rooms = ({navigation}) => {
    return (
        <Layout>

            <Items>
                <Item>
                    <ItemImage source={require('../../assets/rooms/kitchen.jpg')} />
                    <CustomButton title='Go to kitchen' path='Kitchen' navigation={navigation} />
                    {/*<Button title='Go to kitchen' onPress={() => navigation.navigate('Kitchen')} />*/}
                </Item>
                <Item>
                    <ItemImage source={require('../../assets/rooms/bathroom.jpg')} />
                    <CustomButton title='Go to bathroom' path='Bathroom' navigation={navigation} />
                    {/*<Button title='Go to bathroom' onPress={() => navigation.navigate('Bathroom')} />*/}
                </Item>
            </Items>
        </Layout>
    );
};

const Items = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

const Item = styled.View`
  width: 48%;  
  padding: 10px;
  align-items: center;
  border-radius: 15px;
  border: 1px solid black;
`;

const ItemImage = styled.Image`
  width: 100%;
  height: 100px;
  object-fit: contain;
  margin-bottom: 10px;
`;

export default Rooms;