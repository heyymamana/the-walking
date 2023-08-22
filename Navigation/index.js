import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../screens/cart';
import Checkout from '../screens/checkout';
import Sneakers from '../screens/sneakers';
import Sports from '../screens/sports';
import Home from '../screens/home';
import Details from '../screens/product-details';
import Menformal from '../screens/menformal';
import Women from '../screens/women';
import Flipflop from '../screens/flipflop';

import { colors } from '../theme';
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons"
import { useSelector } from 'react-redux';
import { selectCartLength } from '../redux/cartSlice';


const THEME = {
    ...DefaultTheme,

    colors: {
        ...DefaultTheme.colors,
        background: "white",
    },

}


const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
function HomeStackScreens() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={Home} />
        </HomeStack.Navigator >
    )
}

const SneakersStack = createNativeStackNavigator();
function SneakersStackScreen() {
    return (
        <SneakersStack.Navigator screenOptions={{ headerShown: false }}>
            <SneakersStack.Screen name="Sneakers" component={Sneakers} />
            <SneakersStack.Screen name="Details" component={Details} />
        </SneakersStack.Navigator>
    )
}

const SportsStack = createNativeStackNavigator();
function SportsStackScreen() {
    return (
        <SportsStack.Navigator screenOptions={{ headerShown: false }}>
            <SportsStack.Screen name="Sports" component={Sports} />
            <SportsStack.Screen name="Details" component={Details} />
        </SportsStack.Navigator>
    )

}

const MenformalStack = createNativeStackNavigator();
function MenformalStackScreen() {
    return (
        <MenformalStack.Navigator screenOptions={{ headerShown: false }}>
            <MenformalStack.Screen name="Menformal" component={Menformal} />
            <MenformalStack.Screen name="Details" component={Details} />
        </MenformalStack.Navigator>
    )

}
const WomenStack = createNativeStackNavigator();
function WomenStackScreen() {
    return (
        <WomenStack.Navigator screenOptions={{ headerShown: false }}>
            <WomenStack.Screen name="Women" component={Women} />
            <WomenStack.Screen name="Details" component={Details} />
        </WomenStack.Navigator>
    )

}
const FlipflopStack = createNativeStackNavigator();
function FlipflopStackScreen() {
    return (
        <FlipflopStack.Navigator screenOptions={{ headerShown: false }}>
            <FlipflopStack.Screen name="Women" component={Flipflop} />
            <FlipflopStack.Screen name="Details" component={Details} />
        </FlipflopStack.Navigator>
    )

}

const CartStack = createNativeStackNavigator();
function CartStackScreen() {
    return (
        <CartStack.Navigator screenOptions={{ headerShown: false }}>
            <CartStack.Screen name="Cart" component={Cart} />
            <CartStack.Screen name="Checkout" component={Checkout} />
        </CartStack.Navigator>
    )
}

function TabBarIcon({ fontFamily, name, color }) {
    if (fontFamily === 'MaterialCommunityIcons') {
        return <MaterialCommunityIcons name={name} size={30} color={color} />
    }
    else if (fontFamily === "Ionicons") {
        return <Ionicons name={name} size={30} color={color} />
    }
    else if (fontFamily === "SimpleLineIcons") {
        return <SimpleLineIcons name={name} size={30} color={color} />
    }
}


export default function Navigation() {
    const cartLength = useSelector(selectCartLength)
    return (
        <NavigationContainer theme={THEME}  >
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerShown: false, tabBarActiveTintColor: colors.primary, tabBarStyle: { paddingBottom: 10, height: 70 },
                    tabBarLabelStyle: {
                        fontSize: 12
                    },
                }}>
                <Tab.Screen
                    options={{
                        title: "Home",
                        tabBarIcon: ({ color }) =>
                            <TabBarIcon
                                fontFamily={"MaterialCommunityIcons"}
                                name="home"
                                color={color}
                            />
                    }}
                    name="HomeTab"
                    component={HomeStackScreens}
                />
                <Tab.Screen
                    options={{
                        title: "Trending",
                        tabBarIcon: ({ color }) =>
                            <TabBarIcon
                                fontFamily={"MaterialCommunityIcons"}
                                name="fire"
                                color={color}
                            />
                    }}
                    name="SneakersTab"
                    component={SneakersStackScreen}
                />
                
                <Tab.Screen
                    options={{
                        title: "Men's Collection",
                        tabBarIcon: ({ color }) =>
                            <TabBarIcon
                                fontFamily={"MaterialCommunityIcons"}
                                name="shoe-formal"
                                color={color}
                            />
                    }}
                    name="MenformalTab"
                    component={MenformalStackScreen}
                />
                 <Tab.Screen
                    options={{
                        title: "Women's Collection",
                        tabBarIcon: ({ color }) =>
                            <TabBarIcon
                                fontFamily={"MaterialCommunityIcons"}
                                name="shoe-heel"
                                color={color}
                            />
                    }}
                    name="WomenTab"
                    component={WomenStackScreen}
                />

                 <Tab.Screen
                    options={{
                        title: "Profile",
                        tabBarIcon: ({ color }) =>
                            <TabBarIcon
                                fontFamily={"MaterialCommunityIcons"}
                                name="account-settings"
                                color={color}
                            />
                    }}
                    name="FlipflopTab"
                    component={FlipflopStackScreen}
                />
                <Tab.Screen
                    options={{
                        title: "Cart",
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon
                                fontFamily={"Ionicons"}
                                name="cart-outline"
                                color={color}
                            />
                        ),
                        tabBarBadge: cartLength > 0 ? cartLength : null
                    }}
                    name="CartTab"
                    component={CartStackScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}