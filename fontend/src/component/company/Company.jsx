import { useSelector } from 'react-redux';
import './Company.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCompanyName } from '../../redux/apiRequest';


const Company = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const User = useSelector(state => state.auth.user?.currentUser.data);
    const [companyName, setCompanyName] = useState('');
    useEffect(() => {
        if (!User) {
            navigate('/');
        }
    })
    const handleSubmit = (e) => {
        console.log(companyName);
        e.preventDefault();
        const newCompanyName = {
            companyName: companyName
        }
        createCompanyName(
            newCompanyName,
            User.accessToken,
            dispatch,
            navigate
        );
    }
    return (
        <div className='company'>
            <div className='com-container'>
                <div className='com-content'>
                    <span className='com-wellcome'>
                        Hi <b>{User.username}</b>
                    </span>
                    <span>
                        HAY NHAP TEN CONG TY CUA BAN
                    </span>
                    <form onSubmit={handleSubmit}>
                        <div className='com-name'>
                            <span className='s-name'>会社名：</span>
                            <div className='d-name'>
                                <input
                                    onChange={e => setCompanyName(e.target.value)}
                                    className='i-name'
                                    placeholder='株式会社 Join・Japan'
                                    required />
                            </div>
                            <div className='d-btn-com'>
                                <button className='btn-com'>CLICK</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Company;