import "./AccountItem.scss"
function AccountItem({name,avatar}) {
    return ( 
        <div className="phonebook_account_item_search">
            <div className="avatar">
                <img
                    width="40"
                    height="40"
                    src={avatar}
                    alt="avatar"
                />
            </div>
            <div className="name">
                <span>{name}</span>
            </div>
        </div>
     );
}

export default AccountItem;