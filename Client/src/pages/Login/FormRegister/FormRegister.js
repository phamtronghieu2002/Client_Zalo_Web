import OtpInput from 'react-otp-input';
import { useState } from 'react';
import { useLang } from '../../../hooks';
import FormAuthPhone from '../FormAuthPhone/FormAuthPhone';
export default function FormRegister() {
    const { t } = useLang();
    const [phoneRegister, setPhoneRegister] = useState('');
    const [isAuthPhone, setIsAuthPhone] = useState(false);

    const [dataForm, setDataForm] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });

    const handleChangeInput = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        });
    };
    console.log(phoneRegister);
    return !isAuthPhone ? (
        <FormAuthPhone setPhoneRegister={setPhoneRegister} setIsAuthPhone={setIsAuthPhone} />
    ) : (
        <div>
            <div className="input-group flex-nowrap" style={{ paddingRight: '10px' }}>
                <span
                    style={{
                        padding: '0 0 0 10px',
                        width: '39.5px',
                        background: '#f5f5f5',
                    }}
                    className="input-group-text"
                    id="addon-wrapping"
                >
                    <i classname="fa-solid fa-user"></i>
                    {/* <i className="fa-solid fa-lock"></i> */}
                </span>
                <input
                    name="username"
                    value={dataForm.username}
                    onChange={handleChangeInput}
                    style={{ height: '35px' }}
                    className="form-control"
                    placeholder={t('Register.placeholder_username')}
                />
            </div>
            <div className="input-group flex-nowrap mt-2" style={{ paddingRight: '10px' }}>
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
                    value={dataForm.password}
                    type="password"
                    name="password"
                    onChange={handleChangeInput}
                    style={{ height: '35px' }}
                    className="form-control"
                    placeholder={t('Register.placeholder_password')}
                />
            </div>
            <div className="input-group flex-nowrap mt-2" style={{ paddingRight: '10px' }}>
                <span
                    style={{
                        padding: '0 0 0 10px',
                        width: '39.5px',
                        background: '#f5f5f5',
                    }}
                    className="input-group-text"
                    id="addon-wrapping"
                >
                  <i classname="fa-solid fa-check"></i>
                </span>
                <input
                    value={dataForm.confirmPassword}
                    type="password"
                    name="confirmPassword"
                    onChange={handleChangeInput}
                    style={{ height: '35px' }}
                    className="form-control"
                    placeholder={t('Register.placeholder_repassword')}
                />
            </div>
            <div className="btn btn-primary w-100 mt-3">
           { t('Login.button.register') }       
            </div>
        </div>
    );
}
