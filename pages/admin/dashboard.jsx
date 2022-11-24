import { userService } from 'services';
import { Link } from 'components';
// import styles from '../../styles/pages/admin/dashboard.module.css'

export default function Dashboard() {
    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi {userService.userValue?.firstName}!</h1>
                <p><Link href="/admin/users">Manage Users</Link></p>
            </div>
        </div>
    );
}
