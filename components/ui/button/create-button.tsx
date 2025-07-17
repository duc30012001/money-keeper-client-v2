import { Button, ButtonProps } from 'antd';
import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function CreateButton(props: ButtonProps) {
    const messages = useTranslations();

    return (
        <Button type="primary" icon={<Plus />} {...props}>
            {messages('common.create')}
        </Button>
    );
}
