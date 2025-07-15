import { appConfig } from '@/constants/app';
import { AppRoute } from '@/enums/routes';
import Image from 'next/image';
import Link from 'next/link';

function AppLogo() {
    return (
        <Link href={AppRoute.DASHBOARD} className="flex items-center gap-2">
            <Image src={appConfig.logo} alt="logo" width={32} height={32} />
            <h1 className="hidden text-2xl font-bold sm:block">
                {appConfig.title}
            </h1>
        </Link>
    );
}

export default AppLogo;
