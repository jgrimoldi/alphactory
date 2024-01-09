import { useTranslation } from 'react-i18next';
import { RadioButton } from '../Inputs';

export function ButtonGroup ({ label, options, selected, setSelected }) {
  const { t } = useTranslation();
  return (
    <div role='group' aria-label={label} className='flex gap-1 mx-auto md:justify-start justify-center'>
      {options.map((title) => <RadioButton key={title} value={title} selected={selected} setSelected={setSelected}>{t(title)}</RadioButton>)}
    </div>
  );
}
