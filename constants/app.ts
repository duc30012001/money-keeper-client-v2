export const appConfig = {
    logo: process.env.NEXT_PUBLIC_APP_ICON || '/images/icon.png',
    title: process.env.NEXT_PUBLIC_APP_NAME || 'Money Keeper',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://money-keeper.vietduc.blog',
    description:
        process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
        'Money Keeper App - Track your finances, manage your money, and achieve your financial goals',
};
