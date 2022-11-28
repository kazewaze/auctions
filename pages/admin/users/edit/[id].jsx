import { useState, useEffect } from 'react';
import { Layout, AddEdit } from 'components/users';
import { userService, alertService } from 'services';

export default Edit;

function Edit({ id }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // fetch user and set default form values if in edit mode
        userService.getById(id)
            .then(x => setUser(x))
            .catch(alertService.error)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout>
            <h1>Edit User</h1>
            <AddEdit user={user} />
            {!user ? <h3>No User Exists</h3> : ''}
        </Layout>
    );
}

export async function getServerSideProps({ params }) {
    return {
        props: { id: params.id }
    }
}
