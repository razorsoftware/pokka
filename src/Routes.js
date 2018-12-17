import {createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Criar_usuario from './pages/Criar_usuario';
import Pessoas_proximas from './pages/Pessoas_proximas';

const Routes = createStackNavigator({
    Login,
    Criar_usuario,
    Dashboard,
    Pessoas_proximas
});

export default Routes;