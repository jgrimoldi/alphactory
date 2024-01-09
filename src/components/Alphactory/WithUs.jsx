import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import DOMPurify from 'dompurify';

import { Button, Input, Dropdown, DocumentAttach, FreeSolo } from '../Inputs/index';
import { fullNameRegex } from '../../constants/REGEX';
import { showSnackbar } from '../../contexts/SnackbarContext';
import { useEmailSender } from '../../hooks/useEmailSender';
import { backgroundOpt, specificationOpt } from '../../constants/WITHUS';
import { useIntersection } from '../../hooks/useIntersection';
import { reCaptcha } from '../../utils/reCaptcha';
import { useTranslation } from 'react-i18next';

export function WithUs () {
  const { t } = useTranslation();
  const { sendEmail } = useEmailSender();
  const initialValues = { value: '', error: null };
  const [name, setName] = useState(initialValues);
  const [background, setBackground] = useState('');
  const [specification, setSpecification] = useState([]);
  const [location, setLocation] = useState(initialValues);
  const [curriculum, setCurriculum] = useState(initialValues);
  const [formRef, isIntersecting] = useIntersection({ marginRoot: '200px' });
  const [loading, setLoading] = useState(false);
  const SITE_KEY = import.meta.env.VITE_RECAPTCHA_CLIENT;
  const recaptcha = useRef();

  const resetForm = () => {
    setName(initialValues);
    setBackground('');
    setSpecification([]);
    setLocation(initialValues);
    setCurriculum(initialValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const sanitizedName = DOMPurify.sanitize(name.value);
    const sanitizedBackground = DOMPurify.sanitize(background);
    const sanitizedLocation = DOMPurify.sanitize(location.value);
    const sanitizedCurriculum = DOMPurify.sanitize(curriculum.value);

    if (!name.value || !background || !specification || !location.value || !curriculum.value) {
      showSnackbar(t('fillFields'), 'error');
      recaptcha.current.reset();
      setLoading(false);
      return;
    }

    if (!sanitizedName || name.error) {
      showSnackbar(t('invalidOrEmpty', { field: t('fullName') }), 'error');
      recaptcha.current.reset();
      setLoading(false);
      return;
    }

    if (!sanitizedBackground) {
      showSnackbar(t('invalidOrEmpty', { field: t('background') }), 'error');
      recaptcha.current.reset();
      setLoading(false);
      return;
    }

    if (!specification.length === 0) {
      showSnackbar(t('invalidOrEmpty', { field: t('specification') }), 'error');
      recaptcha.current.reset();
      setLoading(false);
      return;
    }

    if (!sanitizedLocation || location.error) {
      showSnackbar(t('invalidOrEmpty', { field: t('location') }), 'error');
      recaptcha.current.reset();
      return;
    }

    if (!sanitizedCurriculum || curriculum.error) {
      showSnackbar(t('invalidOrEmpty', { field: t('curriculumVitae') }), 'error');
      recaptcha.current.reset();
      return;
    }

    const specifications = specification.map(obj => DOMPurify.sanitize(obj.value));
    const totalSpecifications = specifications.length > 3 ? specifications.slice(0, 3).join(', ') + '...' : specifications.join(', ');
    const subject = `${sanitizedBackground} | ${totalSpecifications} | ${sanitizedLocation}`;

    try {
      const isHuman = await reCaptcha({ recaptcha });
      if (isHuman.success) {
        await sendEmail({ name: sanitizedName, subject, email: 'workwithus@alphactory.com.ar', message: `Se adjunta curriculum y ${specifications}` }, curriculum.value);
        resetForm();
      }
    } catch (error) {
      showSnackbar(t('invalidCaptcha'), 'error');
    }

    recaptcha.current.reset();
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} encType='multipart/form-data' className={`flex flex-col md:gap-0 gap-y-4 2xl:max-w-[1170px] max-w[780px] mx-auto opacity-0 ${isIntersecting ? 'animate-fade-and-slide' : ''}`}>
      <div className='mb-4 grid md:grid-cols-2 grid-cols-1 gap-x-4'>
        <Input id='given-name' title='fullName' placeholder='typeName' state={name} setState={setName} classes='order-1' regex={fullNameRegex} />
        <Dropdown options={backgroundOpt} id='background' title='background' placeholder='typeBackground' state={background} setState={setBackground} classes='order-2 md:order-3' />
        <FreeSolo options={specificationOpt} id='specification' title='specification' placeholder='typeSpecification' state={specification} setState={setSpecification} classes='order-3 md:order-5' />
        <Input id='location' title='location' placeholder='typeLocation' state={location} setState={setLocation} classes='order-4 md:order-2' />
        <DocumentAttach id='documentAttach' title='curriculumVitae' maxHeight={156} state={curriculum} setState={setCurriculum} classes='order-5 md:order-4' />
      </div>
      <ReCAPTCHA ref={recaptcha} sitekey={SITE_KEY} size='invisible' />
      <Button id='submit-withus' type='submit' title='send' isLoading={loading} />
    </form>
  );
}
