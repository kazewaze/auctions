import { useState, useEffect } from 'react';

import { Link } from 'components';
import Layout from '../../../components/_common/adminLayout';
import { userService } from 'services';

export default function Index() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
    }, []);

    function deleteUser(id) {
        setUsers(users.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        userService.delete(id).then(() => {
            setUsers(users => users.filter(x => x.id !== id));
        });
    }

    return (
        <Layout>
            <h1>Users</h1>
            <Link href="/admin/users/add">Add User</Link>
            <table>
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>First Name</th>
                        <th style={{ width: '30%' }}>Last Name</th>
                        <th style={{ width: '30%' }}>Username</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.username}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link href={`/admin/users/edit/${user.id}`}>Edit</Link>
                                <button onClick={() => deleteUser(user.id)} disabled={user.isDeleting}>
                                </button>
                            </td>
                        </tr>
                    )}
                    {users && !users.length &&
                        <tr>
                            <td colSpan="4" style="text-center">
                                <h3>No Users To Display</h3>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </Layout>
    );
}
