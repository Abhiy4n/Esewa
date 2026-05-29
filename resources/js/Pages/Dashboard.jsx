import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import Tutorial from '@/Components/Tutorial';

export default function Dashboard() {
    const { flash } = usePage().props;
    const showTutorial = flash?.showTutorial === true || flash?.showTutorial === 'true';

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            {showTutorial && <Tutorial />}

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div> 
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
