import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Categorias" component={Categories} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
};
export default TabRoutes;
