import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from 'components'
import { Layout } from 'components/account';
import { userService, alertService } from 'services';

import styles from '../../styles/pages/admin/login.module.css'

export default function Login() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ username, password }) {
        return userService.login(username, password)
            .then(() => {
              router.push('/admin/dashboard');
            })
            .catch(alertService.error);
    }

    return (
        <Layout>
            <div className={styles.Card}>
                <div className={styles.cardBody}>
                    <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.formGroup}>
                            <label>Username</label>
                            <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className={styles.extraSpace}>
                            <label>Password</label>
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className={styles.invalidFeedback}>{errors.password?.message}</div>
                        </div>
                        <button disabled={formState.isSubmitting} className={styles.Btn}>
                        {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Login
                        </button>
                    </form>
                </div>
            </div>
            <div className={styles.returnHomeLink}>
              <Link href="/">Go Home</Link>
            </div>
        </Layout>
    );
}
