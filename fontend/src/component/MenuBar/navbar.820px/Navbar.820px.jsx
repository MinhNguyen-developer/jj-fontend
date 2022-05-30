import './Navbar.820.css';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRightFromBracket,
    faGear,
    faCircleInfo,
    faHouseUser,
    faBuildingUser,
    faHandshakeSimple
} from '@fortawesome/free-solid-svg-icons';
import { logOut } from '../../../redux/authSlice';

const Navbar820 = () => {

    const user = useSelector((state) => state.auth.user?.currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logOut());
        navigate('/');
    }

    return (
        <div className='navbar-820'>
            <div className='content-820'>
                <span>
                    <Link to='/'><b>J</b><span>OIN JAPAN</span> <FontAwesomeIcon icon={faHandshakeSimple} /></Link>
                </span>
                <div>
                    {user ?
                        <>
                            <li><Link to='/'>{user.data.username}</Link></li>
                            <li><NavLink to='/' activeClassNam='active'>
                                <FontAwesomeIcon icon={faHouseUser} />
                            </NavLink></li>
                            {
                                user.data.role === 'user' ?
                                    <>
                                        <li><NavLink to='/user' activeClassNam='active'>
                                            <FontAwesomeIcon icon={faGear} />
                                        </NavLink>
                                        </li>

                                    </>
                                    :
                                    <>
                                        <li>
                                            <NavLink to='/job' activeClassNam='active'>
                                                <FontAwesomeIcon icon={faBuildingUser} />
                                            </NavLink>
                                        </li>
                                    </>
                            }
                            <li>
                                <NavLink to='/about' activeClassNam='active'>
                                    <FontAwesomeIcon icon={faCircleInfo} />
                                </NavLink>
                            </li>

                            <li><Link to=''>
                                <FontAwesomeIcon icon={faRightFromBracket} onClick={(e) => handleLogout(e)} /></Link></li>
                        </>
                        :
                        <>
                            <li>
                                <NavLink
                                    to='/'
                                    activeClassNam='active'
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li><NavLink to='/login' activeClassNam='active'>Login</NavLink></li>
                            <li><NavLink to='/register' activeClassNam='active'>Register</NavLink></li>
                            <li><NavLink to='/about' activeClassNam='active'>About</NavLink></li>
                        </>}
                </div>
            </div>
        </div>
    )
}
export default Navbar820;