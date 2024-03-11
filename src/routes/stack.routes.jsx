import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

const StackRouters = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Perfil" component={Categories} />
      <Stack.Screen name="Categorias" component={Profile} />
    </Stack.Navigator>
  );
};
export default StackRouters;
