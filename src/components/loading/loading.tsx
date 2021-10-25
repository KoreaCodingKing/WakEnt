import logo from '../../assets/images/logo_square.png';
import './loading.scss';

const Loading = () => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    )
}

export default Loading;