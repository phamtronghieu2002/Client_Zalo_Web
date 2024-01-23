import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import clsx from 'clsx';
import { useState } from 'react';
import { useLang } from '../../../hooks';
import ModalOTP from '../../../components/ModalOTP/ModalOTP';
export default function FormAuthPhone({setPhoneRegister, setIsAuthPhone}) {
    const [phone, setPhone] = useState('');
    const [isOpenModalOTP, setIsOpenModalOTP] = useState(false);
    const { t } = useLang();

    const handleOpenModal = (isOpen) => {
        setIsOpenModalOTP(isOpen);
    };

    const handleCheckValidOtp = (otp) => {
     //check otp valid
     const isValid = true;
     if(isValid){
        setPhoneRegister(phone)
        handleOpenModal(false);
        setIsAuthPhone(true);
     }
    };
    return (
        <div>
            <PhoneInput country="vn" placeholder={t('Login.placeholder.phone')} value={phone} onChange={setPhone} />
            <div
                type="button"
                onClick={() => {
                    handleOpenModal(true);
                }}
                className={clsx('btn btn-primary w-100 mt-3', phone.length < 3 ? 'disabled' : '')}
            >
                {t('Login.button.send_otp')}
            </div>

            {isOpenModalOTP && <ModalOTP onClose={handleOpenModal} onConfirm={handleCheckValidOtp} />}
        </div>
    );
}
