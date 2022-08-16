import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './Menu';
import Aula01_01 from './Aula01_01';
import Aula02_01 from './Aula02_01';
import Aula02_02 from './Aula02_02';
import Aula02_03 from './Aula02_03';
import Aula03_01 from './Aula03_01';
import Aula03_02 from './Aula03_02';
import Aula04_01 from './Aula04_01';
import Aula04_02 from './Aula04_02';
import Aula04_03 from './Aula04_03';
import Aula05_01 from './Aula05_01';
import Aula05_02 from './Aula05_02';
import Aula06_01 from './Aula06_01';
import Aula06_02 from './Aula06_02';
import Aula07_01 from './Aula07_01';
import Aula07_02 from './Aula07_02';
import Aula07_03 from './Aula07_03';
import Aula07_04 from './Aula07_04';
import Aula07_05 from './Aula07_05';
import Aula08_01 from './Aula08_01';
import Aula08_02 from './Aula08_02';
import Aula08_03 from './Aula08_03';
import Aula08_04 from './Aula08_04';
import Aula09_01 from './Aula09_01';
import Aula09_02 from './Aula09_02';
import Aula09_03 from './Aula09_03';

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
            title: 'Funções',
            ...headerOptions,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Aula01_01" component={Aula01_01} options={{ title: 'Aula 1', ...headerOptions }} />
        <Stack.Screen name="Aula02_01" component={Aula02_01} options={{ title: 'Aula 2', ...headerOptions }} />
        <Stack.Screen name="Aula02_02" component={Aula02_02} options={{ title: 'Aula 2', ...headerOptions }} />
        <Stack.Screen name="Aula02_03" component={Aula02_03} options={{ title: 'Aula 2', ...headerOptions }} />
        <Stack.Screen name="Aula03_01" component={Aula03_01} options={{ title: 'Aula 3', ...headerOptions }} />
        <Stack.Screen name="Aula03_02" component={Aula03_02} options={{ title: 'Aula 3', ...headerOptions }} />
        <Stack.Screen name="Aula04_01" component={Aula04_01} options={{ title: 'Aula 4', ...headerOptions }} />
        <Stack.Screen name="Aula04_02" component={Aula04_02} options={{ title: 'Aula 4', ...headerOptions }} />
        <Stack.Screen name="Aula04_03" component={Aula04_03} options={{ title: 'Aula 4', ...headerOptions }} />
        <Stack.Screen name="Aula05_01" component={Aula05_01} options={{ title: 'Aula 5', ...headerOptions }} />
        <Stack.Screen name="Aula05_02" component={Aula05_02} options={{ title: 'Aula 5', ...headerOptions }} />
        <Stack.Screen name="Aula06_01" component={Aula06_01} options={{ title: 'Aula 6', ...headerOptions }} />
        <Stack.Screen name="Aula06_02" component={Aula06_02} options={{ title: 'Aula 6', ...headerOptions }} />
        <Stack.Screen name="Aula07_01" component={Aula07_01} options={{ title: 'Aula 7', ...headerOptions }} />
        <Stack.Screen name="Aula07_02" component={Aula07_02} options={{ title: 'Aula 7', ...headerOptions }} />
        <Stack.Screen name="Aula07_03" component={Aula07_03} options={{ title: 'Aula 7', ...headerOptions }} />
        <Stack.Screen name="Aula07_04" component={Aula07_04} options={{ title: 'Aula 7', ...headerOptions }} />
        <Stack.Screen name="Aula07_05" component={Aula07_05} options={{ title: 'Aula 7', ...headerOptions }} />
        <Stack.Screen name="Aula08_01" component={Aula08_01} options={{ title: 'Aula 8', ...headerOptions }} />
        <Stack.Screen name="Aula08_02" component={Aula08_02} options={{ title: 'Aula 8', ...headerOptions }} />
        <Stack.Screen name="Aula08_03" component={Aula08_03} options={{ title: 'Aula 8', ...headerOptions }} />
        <Stack.Screen name="Aula08_04" component={Aula08_04} options={{ title: 'Aula 8', ...headerOptions }} />
        <Stack.Screen name="Aula09_01" component={Aula09_01} options={{ title: 'Aula 9', ...headerOptions }} />
        <Stack.Screen name="Aula09_02" component={Aula09_02} options={{ title: 'Aula 9', ...headerOptions }} />
        <Stack.Screen name="Aula09_03" component={Aula09_03} options={{ title: 'Aula 9', ...headerOptions }} />
      </Stack.Navigator>
  );
};

export default Router;