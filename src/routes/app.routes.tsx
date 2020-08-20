import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../pages/Profile';
import AppointmentCreated from '../pages/AppointmentCreated';
import CreateAppointment from '../pages/CreateAppointment';
import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="dashboard" component={Dashboard} />
    <App.Screen name="appointmentCreated" component={AppointmentCreated} />
    <App.Screen name="createAppointment" component={CreateAppointment} />

    <App.Screen name="profile" component={Profile} />
  </App.Navigator>
);

export default AppRoutes;
