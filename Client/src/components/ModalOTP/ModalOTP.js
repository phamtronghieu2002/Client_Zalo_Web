import './ModalOTP.scss';
import { useLang } from '../../hooks';
import { useState } from 'react';
import OtpInput from 'react-otp-input';

export default function ModalOTP({ onClose ,onConfirm}) {
    const [otp, setOtp] = useState('');
    const { t } = useLang();
    return (
        <div id="overlay">
            <div className="modal" tabindex="-1" style={{ display: 'block' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{t('Login.modal.title')}</h5>
                            <button type="button" className="btn-close" onClick={() => onClose(false)}></button>
                        </div>
                        <div className="modal-body">
                            <p>{t('Login.modal.content')}</p>
                            <div className="wp_otp mt-3">
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={6}
                                    renderSeparator={<span>-</span>}
                                    renderInput={(props) => <input {...props} />}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={() => onClose(false)}
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                {t('Login.modal.button.cancel')}
                            </button>
                            <button 
                            onClick={()=>{onConfirm(otp)}}
                            type="button" className="btn btn-primary">
                                {t('Login.modal.button.confirm')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
