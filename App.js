import * as React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
  Modal,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";

import Cart from "./screens/Cart";
import Favourite from "./screens/Favourite";
import Profile from "./screens/Profile";
import ProductDetails from "./screens/ProductDetails";

import fetchProducts from "./hooks/fetchProducts";
import HomeIcon from "./components/icons/HomeIcon";
import CartIcon from "./components/icons/CartIcon";
import StarIcon from "./components/icons/StarIcon";
import ProfileIcon from "./components/icons/ProfileIcon";

const Tab = createBottomTabNavigator();

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState([]);
  const [toggleModal, setToggleModal] = React.useState(false);

  React.useEffect(() => {
    fetchProducts(setData, setLoading, setError);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            children={() => (
              <Home
                data={data}
                toggleModal={toggleModal}
                setToggleModal={setToggleModal}
              />
            )}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: () => <HomeIcon />,
            }}
          />
          <Tab.Screen
            name="Cart"
            children={() => <Cart />}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarBadge: 59,
              tabBarIcon: () => <CartIcon />,
            }}
          />
          <Tab.Screen
            name="Favourite"
            children={() => <Favourite />}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: () => <StarIcon />,
            }}
          />
          <Tab.Screen
            name="Profile"
            children={() => <Profile />}
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarIcon: () => <ProfileIcon />,
            }}
          />
          <Tab.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{
              tabBarButton: () => null,
              tabBarVisible: false,
              headerShown: false,
              tabBarShowLabel: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
