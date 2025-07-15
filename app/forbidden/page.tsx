import { AppRoute } from '@/enums/routes';
import { Link } from '@/i18n/navigation';
import { Button } from 'antd';
import Image from 'next/image';

export default function ForbiddenPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div>
                <Image
                    src={'/images/403.jpg'}
                    alt="403"
                    width={500}
                    height={300}
                />
            </div>
            <h2 className="text-3xl font-bold">Access Denied</h2>
            <p className="text-muted-foreground text-lg">
                You do not have permission to view this resource.
            </p>
            <Link href={AppRoute.DASHBOARD} className="mt-6">
                <Button type="primary" size="large">
                    Back to Dashboard
                </Button>
            </Link>
        </div>
    );
}
