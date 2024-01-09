import { useTranslation } from 'react-i18next';
import { Link as Anchor } from 'react-router-dom';

export function Link ({ title, url }) {
  const { t } = useTranslation();

  return (
    <li>
      <Anchor href={url} className='2xl:text-base text-sm capitalize hover:underline'>{t(title)}</Anchor>
    </li>
  );
}
