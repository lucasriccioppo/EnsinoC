import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './Menu';
import Aula01_01 from './Aula01_01';
import Aula01_02 from './Aula01_02';
import Aula01_03 from './Aula01_03';
import Aula01_04 from './Aula01_04';
import Aula02_01 from './Aula02_01';
import Aula02_02 from './Aula02_02';
import Aula03_01 from './Aula03_01';
import Aula03_02 from './Aula03_02';
import Aula03_03 from './Aula03_03';
import Aula04_01 from './Aula04_01';
import Aula05_01 from './Aula05_01';
import Aula05_02 from './Aula05_02';
import Aula05_03 from './Aula05_03';
import Aula05_04 from './Aula05_04';

const headerOptions = {
  headerStyle: {
    backgroundColor: '#ff9a00',
  },
  headerTintColor: '#fff',
}

const Stack = createStackNavigator();

const Router = () => {
  return (
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title: 'String',
            ...headerOptions,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Aula01_01" component={Aula01_01} options={{ title: 'Aula 1', ...headerOptions }} />
        <Stack.Screen name="Aula01_02" component={Aula01_02} options={{ title: 'Aula 1', ...headerOptions }} />
        <Stack.Screen name="Aula01_03" component={Aula01_03} options={{ title: 'Aula 1', ...headerOptions }} />
        <Stack.Screen name="Aula01_04" component={Aula01_04} options={{ title: 'Aula 1', ...headerOptions }} />
        <Stack.Screen name="Aula02_01" component={Aula02_01} options={{ title: 'Aula 2', ...headerOptions }} />
        <Stack.Screen name="Aula02_02" component={Aula02_02} options={{ title: 'Aula 2', ...headerOptions }} />
        <Stack.Screen name="Aula03_01" component={Aula03_01} options={{ title: 'Aula 3', ...headerOptions }} />
        <Stack.Screen name="Aula03_02" component={Aula03_02} options={{ title: 'Aula 3', ...headerOptions }} />
        <Stack.Screen name="Aula03_03" component={Aula03_03} options={{ title: 'Aula 3', ...headerOptions }} />
        <Stack.Screen name="Aula04_01" component={Aula04_01} options={{ title: 'Aula 4', ...headerOptions }} />
        <Stack.Screen name="Aula05_01" component={Aula05_01} options={{ title: 'Aula 5', ...headerOptions }} />
        <Stack.Screen name="Aula05_02" component={Aula05_02} options={{ title: 'Aula 5', ...headerOptions }} />
        <Stack.Screen name="Aula05_03" component={Aula05_03} options={{ title: 'Aula 5', ...headerOptions }} />
        <Stack.Screen name="Aula05_04" component={Aula05_04} options={{ title: 'Aula 5', ...headerOptions }} />
      </Stack.Navigator>
  );
};

export default Router;