import { NavigationContainer } from '@react-navigation/native';
import TaskNavigator from './task';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TaskNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;