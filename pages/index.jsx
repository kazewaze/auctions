import { Link } from 'components';

export default Home;

function Home() {
    return (
        <div className="p-4">
            <div className="container">
                <h1>Ingram Auctions</h1>
                <p><Link href="/admin/login">Login</Link></p>
            </div>
        </div>
    );
}
