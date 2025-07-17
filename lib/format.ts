import dayjs from 'dayjs';

export function formatDate(
    date: Date | string | number | undefined,
    format = 'HH:mm DD/MM/YYYY'
) {
    if (!date) return '';

    try {
        return dayjs(date).format(format);
    } catch (err) {
        console.log('formatDate error:', err);
        return null;
    }
}

export function formatNumber(
    value: number | string = 0,
    options?: Intl.NumberFormatOptions
): string {
    return new Intl.NumberFormat([], options).format(Number(value));
}
