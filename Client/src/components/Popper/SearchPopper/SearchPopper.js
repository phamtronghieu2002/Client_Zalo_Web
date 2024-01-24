import './SearchPopper.scss';
import AccountItem from '../../Search/AccountItem/AccountItem';
export default function SearchPopper() {
    return (
        <div id="wp_search_popper">
            <h5 className="text-left fs-6 ps-3">Recent Search</h5>
            <div className="users">
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
            </div>
        </div>
    );
}
