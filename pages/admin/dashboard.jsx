import { userService } from 'services';
import { Link } from 'components';

export default Dashboard;

function Dashboard() {
    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi {userService.userValue?.firstName}!</h1>
                <p><Link href="/admin/users">Manage Users</Link></p>
            </div>
        </div>
    );
}
