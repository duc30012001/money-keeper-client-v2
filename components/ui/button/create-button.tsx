import { Button, ButtonProps } from 'antd';
import { useTranslations } from 'next-intl';

export function CreateButton(props: ButtonProps) {
    const messages = useTranslations();

    return (
        <Button type="primary" {...props}>
            {messages('common.create')}
        </Button>
    );
}
