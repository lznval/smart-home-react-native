import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./Home";
import Bathroom from "./rooms/Bathroom";
import Kitchen from "./rooms/Kitchen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Profile from "./Profile";
import Settings from "./Settings";
import Rooms from "./rooms/Rooms";
import Icon from 'react-native-vector-icons/Ionicons';

const RoomStack = createNativeStackNavigator();

const RoomsStackScreen = () => {
    return (
        <RoomStack.Navigator screenOptions={{ headerShown: false }}>
            <RoomStack.Screen name='RoomsScreen' component={Rooms} />
            <RoomStack.Screen name='Kitchen' component={Kitchen} />
            <RoomStack.Screen name='Bathroom' component={Bathroom} />
        </RoomStack.Navigator>
    )
}
const Navigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabelStyle: {fontSize: 12, fontWeight: 700},
                }}
            >
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        title: 'Home',
                        tabBarIcon: ({focused}) => {
                            return <Icon name={focused ? 'grid' : 'grid-outline'} size={25} />
                        }
                    }}
                />
                <Tab.Screen
                    name='Rooms'
                    component={RoomsStackScreen}
                    options={{
                        title: 'Rooms',
                        tabBarIcon: ({focused}) => {
                            return <Icon name={focused ? 'home' : 'home-outline'} size={25} />
                        }
                    }}
                />
                <Tab.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({focused}) => {
                            return <Icon name={focused ? 'person' : 'person-outline'} size={25} />
                        }
                    }}
                />
                <Tab.Screen
                    name='Settings'
                    component={Settings}
                    options={{
                        title: 'Settings',
                        tabBarIcon: ({focused}) => {
                            return <Icon name={focused ? 'settings' : 'settings-outline'} size={25} />
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;