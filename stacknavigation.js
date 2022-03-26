import HomeScreen from '../screens/homeScreen'
import ChooseSubj from '../screens/chooseSubj'
import AddMore from '../screens/addMore'
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
function App(){
  return(
   <NavigationContainer>
   <Stack.Navigator initialRouteName = "Home"
                    screenOptions = {{ headerShown : false}}>
  <Stack.Screen name = "Home" component = {HomeScreen}/>
  <Stack.Screen name = "ChooseSubj" component = {ChooseSubj}/>
   <Stack.Screen name = "AddMore" component = {AddMore}/>
  </Stack.Navigator>
  </NavigationContainer>
  );
}
  export default App;
 