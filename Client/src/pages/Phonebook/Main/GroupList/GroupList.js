import { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import GroupItem from './GroupItem/GroupItem';
const groups = [
    {
        name: 'QLDA',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAxYVYTy6wW7hAwMiRNRQgArxWEjqjCbYkMw&usqp=CAU',
        memberNumber: 10,
    },
    {
        name: 'Công Nghệ Mới',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAxYVYTy6wW7hAwMiRNRQgArxWEjqjCbYkMw&usqp=CAU',
        memberNumber: 12,
    },
    {
        name: 'Nhóm Ae ABC',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAxYVYTy6wW7hAwMiRNRQgArxWEjqjCbYkMw&usqp=CAU',
        memberNumber: 20,
    },
];
function GroupList() {
    const [data, setData] = useState(groups);

    const handleSearchUser = () => {
        console.log('call api');
    };

    return (
        <Layout onSearch={handleSearchUser}>
            <div id="group_list">
                {data.map((item, index) => (
                    <GroupItem key={index} {...item} />
                ))}
            </div>
        </Layout>
    );
}

export default GroupList;
