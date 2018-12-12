import {createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Criar_usuario from './pages/Criar_usuario';

const Routes = createStackNavigator({
    Login,
    Criar_usuario,
    Dashboard
});

export default Routes;