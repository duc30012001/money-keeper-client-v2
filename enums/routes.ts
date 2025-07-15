import { UserRole } from '@/modules/user/enums/user';
import {
    CreditCard,
    Layers,
    LayoutGrid,
    ListCheck,
    Tag,
    User,
    Users,
    type LucideIcon,
} from 'lucide-react';

export enum AppRoute {
    DASHBOARD = '/dashboard',
    TRANSACTIONS = '/transactions',
    ACCOUNT_TYPES = '/account-types',
    ACCOUNTS = '/accounts',
    CATEGORIES = '/categories',
    ACTION_TYPES = '/action-types',
    ICONS = '/icons',
    USERS = '/users',
    SIGNIN = '/',
    FORBIDDEN = '/forbidden',
    NOTFOUND = '/not-found',
    BUDGETS = '/budgets',
}

export interface SidebarItem {
    title: string;
    href: AppRoute;
    icon: LucideIcon;
    role?: UserRole;
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
    { title: 'Dashboard', href: AppRoute.DASHBOARD, icon: ListCheck },
    {
        title: 'Transactions',
        href: AppRoute.TRANSACTIONS,
        icon: CreditCard,
    },
    { title: 'Accounts', href: AppRoute.ACCOUNTS, icon: User },
    { title: 'Account Types', href: AppRoute.ACCOUNT_TYPES, icon: Layers },
    { title: 'Categories', href: AppRoute.CATEGORIES, icon: Tag },
    {
        title: 'Icons',
        href: AppRoute.ICONS,
        icon: LayoutGrid,
        role: UserRole.ADMIN,
    },
    { title: 'Users', href: AppRoute.USERS, icon: Users, role: UserRole.ADMIN },
];
