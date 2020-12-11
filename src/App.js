import { ThemeProvider }            from '@material-ui/styles';
import { Switch, Route }            from 'react-router-dom';
import Home                         from  './pages/Home/Home';
import { theme }                    from './core/theme';
import './scss/main.scss'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route path={'/'} component={Home} />
            </Switch>
        </ThemeProvider>
    );
}
 
export default App;
 