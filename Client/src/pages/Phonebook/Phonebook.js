import './Phonebook.scss';
import { useState } from 'react';

import Main from './Main/Main';
import SidebarNav from '../../components/SidebarNav/SidebarNav';
import SocialDashboard from './SocialDashboard/SocialDashboard';
function Phonebook() {
 
    const [socialSelect, setSocialSelect] = useState({
        type: 'friend',
        title: 'Bạn bè',
        icon: <i className="fa-solid fa-user"></i>,
    });


    return (
        <div id="wp_phonebook_page">
            <SidebarNav />
            <SocialDashboard 
            setSocialSelect={setSocialSelect}
            
            />
            <Main {...socialSelect} />
        </div>
    );
}

export default Phonebook;
