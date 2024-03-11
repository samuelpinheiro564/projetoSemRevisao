import { NavigationContainer } from "@react-navigation/stack/lib/typescript/src/types";

import StackRouters from "./stack.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRouters />
    </NavigationContainer>
  );
}
