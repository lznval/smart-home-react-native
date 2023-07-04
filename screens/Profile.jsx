import React from 'react';
import {Text, View} from "react-native";
import Layout from "../components/Layout";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
    return (
        <Layout>
            <ProfileWrapper>
                <ProfileTitle>Hello, Alex</ProfileTitle>
                <ProfileImage source={require('../assets/profile/profile.jpg')} />
            </ProfileWrapper>
            <ProfileItems>
                <ProfileItem>
                    <Icon style={{marginRight: 10}} name='person' size={30} />
                    <Text style={{
                        fontSize: 18
                    }}>Profile details</Text>
                    <Icon style={{marginLeft: 'auto'}} name='chevron-forward-outline' size={30} />
                </ProfileItem>
                <ProfileItem>
                    <Icon style={{marginRight: 10}} name='notifications' size={30} />
                    <Text style={{
                        fontSize: 18
                    }}>Push Notifications</Text>
                    <Icon style={{marginLeft: 'auto'}} name='chevron-forward-outline' size={30} />
                </ProfileItem>
                <ProfileSeparator />
                <ProfileItem>
                    <Icon style={{marginRight: 10}} name='help-circle' size={30} />
                    <Text style={{
                        fontSize: 18
                    }}>Support</Text>
                    <Icon style={{marginLeft: 'auto'}} name='chevron-forward-outline' size={30} />
                </ProfileItem>
                <ProfileItem>
                    <Icon style={{marginRight: 10}} name='log-out' size={30} />
                    <Text style={{
                        fontSize: 18
                    }}>Log out</Text>
                    <Icon style={{marginLeft: 'auto'}} name='chevron-forward-outline' size={30} />
                </ProfileItem>
            </ProfileItems>
        </Layout>
    );
};

const ProfileWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const ProfileTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

const ProfileItems = styled.View`
  margin-top: 20px;
  row-gap: 20px;
`;
const ProfileItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px 10px;
  background-color: #F7F7F7;
  border-radius: 15px;
`;

const ProfileSeparator = styled.View`
  width: 100%;
  height: 1px;
  background-color: #F7F7F7;
  border-radius: 15px;
  margin: 10px 0;
`;

export default Profile;