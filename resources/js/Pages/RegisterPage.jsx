import { Head, router } from '@inertiajs/react';
import EsewaRegistration from '../Components/HomepageComp/registerpage';

export default function RegisterPage() {
    const handleClose = () => {
        router.visit(route('home'));
    };

    return (
        <>
            <Head title="Register" />
            <EsewaRegistration onClose={handleClose} />
        </>
    );
}
