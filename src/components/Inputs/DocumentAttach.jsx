import { useTranslation } from 'react-i18next';
import { Add } from '../Interface/Icons';
import { showSnackbar } from '../../contexts/SnackbarContext';

export function DocumentAttach ({ id, title, maxHeight, state, setState, classes }) {
  const { t } = useTranslation();

  const onDragOver = (event) => {
    event.preventDefault();
    event.currentTarget.children[1].classList.add('border-ip-purple');
  };

  const onDragLeave = (event) => {
    event.currentTarget.children[1].classList.remove('border-ip-purple');
    event.currentTarget.children[1].classList.add('border-ft-gray');
  };

  const onFileChange = (event) => {
    const file = event.target.files[0];
    handleFile(file);
  };

  const onDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    const maxSize = 5 * 1024 * 1024;
    if (file) {
      if (file.size > maxSize) {
        showSnackbar(t('fileLimit'), 'error');
        setState({ error: true });
      } else if (file.type !== 'application/pdf' && file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        showSnackbar(t('allowedFiles'), 'error');
        setState({ error: true });
      } else {
        setState({ value: file, error: false });
        showSnackbar(t('fileSuccess', { filename: file.name }), 'success');
      }
    }
  };

  const handleDelete = (event) => {
    setState({ value: '', error: null });
  };

  return (
    <div style={{ maxHeight }} className={`h-full row-span-2 pb-[14px] ${classes}`} onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
      <label htmlFor={id} className='block mb-[10px] text-sm font-medium text-ft-gray cursor-pointer'>{`${t(title)}*`}</label>
      <div className={`border ${state.error === true ? 'border-[#E23700]' : state.error === false ? 'border-ip-purple' : 'border-ft-gray'} rounded-lg flex items-center justify-center h-full p-4`}>
        <input className='hidden' id={id} name={id} type='file' autoFocus onChange={onFileChange} />
        <div className='flex items-center gap-x-4'>
          {!state.value?.name
            ? (
              <>
                <label htmlFor={id} className='md:w-11 w-9 md:h-11 h-9 rounded-full p-2 bg-ip-purple  fill-white cursor-pointer'>
                  <Add />
                </label>
                <label htmlFor={id} className='cursor-pointer'>
                  <div className='flex flex-col'>
                    <p className='font-semibold md:text-base text-sm text-ft-gray'>
                      {t('upload')} {t(title)}
                    </p>
                    <p className='font-normal md:text-sm text-xs text-ft-gray'>
                      {t('dragDrop')}
                    </p>
                    <small className='text-xs text-ft-muted font-light'>{t('fileLegend')}</small>
                  </div>
                </label>
              </>
              )
            : (
              <>
                <span className='font-semibold md:text-base text-sm text-ft-gray'>{state.value?.name}</span>
                <button onClick={handleDelete} className='text-white' aria-label={`Delete ${state.value?.name}`}>
                  <i className='pi pi-trash' />
                </button>
              </>
              )}
        </div>
      </div>
    </div>
  );
}
