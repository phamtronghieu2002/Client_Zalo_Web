import './GroupItem.scss';
function GroupItem({ name, avatar, memberNumber }) {
    return (
        <div className="group_item_container">
            <div className="avatar">
                <img width="40" height="40" src={avatar} alt="avatar" />
            </div>
            <div className="infor">
                <div className="name">
                        <i class="fa-solid fa-users"></i>
                    <span>{name}</span>
                </div>
                <div className="member_number">
                    <span>{memberNumber} thành viên</span>
                </div>
            </div>
        </div>
    );
}

export default GroupItem;
