'use client';

import { useSearchParams } from 'next/navigation';

function useQueryParams() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const queryParams: any = {};
    const searchParams = useSearchParams();
    searchParams?.forEach((value, key) => {
        queryParams[key] = value;
    });
    return queryParams;
}

export { useQueryParams };
