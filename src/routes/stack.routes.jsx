import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";

const Stack = createNativeStackNavigator();
const StackRouters = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
export default StackRouters;
