import 'react-phone-input-2/lib/style.css';
import './formLogin.scss';
import PhoneInput from 'react-phone-input-2';
import clsx from 'clsx';
import { useState } from 'react';
import { useLang } from '../../../hooks';
export default function FormLogin() {
    const { i18n, t } = useLang();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div id="form-login">
            <div>
                <PhoneInput country="vn" placeholder={t('Login.placeholder.phone')} value={phone} onChange={setPhone} />
            </div>
            <div className="input-group flex-nowrap mt-3" style={{ paddingRight: '10px' }}>
                <span
                    style={{
                        padding: '0 0 0 10px',
                        width: '39.5px',
                        background: '#f5f5f5',
                    }}
                    className="input-group-text"
                                                 id="addon-wrapping"
                >
                    <i className="fa-solid fa-lock"></i>
                </span>
                <input
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    style={{ height: '35px' }}
                    type="password"
                    className="form-control"
                    placeholder={t('Login.placeholder.password')}
                />
            </div>          
            <button className={clsx('btn btn-primary mt-3 w-100', password && phone.length > 4 ? '' : 'disabled')}>
                {t('Login.button.login')}
            </button>

            <div className="forgot-password mt-4">
                <a href="#" className="text-center d-block fs-6 ">
                    {t('Login.button.forgot_password')}{' '}
                </a>
            </div>
        </div>
    );
}
