import { userService } from 'services';
// import { Link } from 'components';
import Layout from '../../components/_common/adminLayout';
import styles from '../../styles/pages/admin/dashboard.module.css';

export default function Dashboard() {
    return (
      <Layout>
        <h1>Hi {userService.userValue?.firstName}!</h1>
      </Layout>
    );
}
