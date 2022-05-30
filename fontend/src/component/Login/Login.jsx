import './Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/apiRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            username: username,
            password: password
        };
        loginUser(newUser, dispatch, navigate);
    }

    return (

        <div className="log-container">
            <div className="log-content">
                <form onSubmit={handleSubmit}>
                    <div className="log-d-content">
                        <span className="log-s-title">ログイン</span>
                        <div className="log-d-username">

                            <span className="log-s-username">
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            <input
                                type='text'
                                className='log-i-username'
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder='ユーザー名を入力して下さい。'
                                required
                            />

                        </div>
                        <div className="log-d-pass">
                            <span className="log-s-pass">
                                <FontAwesomeIcon icon={faKey} />
                            </span>
                            <input
                                type='password'
                                className='log-i-pass'
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='パスワードを入力して下さい。'
                                required
                            />
                        </div>
                        <span className='err'>{ }</span>
                        <div className="log-d-btn">
                            <button className='log-btn'>ログイン</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default Login;