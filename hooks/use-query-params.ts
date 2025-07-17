'use client';

import { Parser, useQueryStates } from 'nuqs';

export type ParserMap<T> = {
    [K in keyof T]: Parser<T[K]>;
};

export function useQueryParams<T extends Record<string, any>>(
    parsers: ParserMap<T>,
    options?: { history?: 'push' | 'replace' }
) {
    // `query` has shape T, typed
    const [query, setQuery] = useQueryStates(parsers, options);
    return { query, setQuery };
}
