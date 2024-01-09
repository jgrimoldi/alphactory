import { useContext, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import DOMPurify from 'dompurify';
import { getNameList } from 'country-list';

import { Button, Dropdown, Input } from '../Inputs/index';
import { emailRegex, entityRegex } from '../../constants/REGEX';
import { ModulesContext } from '../../contexts/ModulesContext';
import { moduleOptions } from './data/price';
import { showSnackbar } from '../../contexts/SnackbarContext';
import { useEmailSender } from '../../hooks/useEmailSender';
import { reCaptcha } from '../../utils/reCaptcha';
import { useTranslation } from 'react-i18next';

export function ContactForm () {
  const { t } = useTranslation();
  const { sendEmail } = useEmailSender();
  const { module, setModule } = useContext(ModulesContext);
  const countries = getNameList();
  const initialValues = { value: '', error: null };
  const options = Object.keys(countries).map(country => ({
    value: countries[country],
    label: country[0].toUpperCase() + country.slice(1).toLowerCase()
  }));

  const [entity, setEntity] = useState(initialValues);
  const [country, setCountry] = useState(initialValues);
  const [email, setEmail] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const SITE_KEY = import.meta.env.VITE_RECAPTCHA_CLIENT;
  const recaptcha = useRef();

  const resetForm = () => {
    setModule('');
    setEntity(initialValues);
    setCountry(initialValues);
    setEmail(initialValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const sanitizedModule = DOMPurify.sanitize(module);
    const sanitizedEntity = DOMPurify.sanitize(entity.value);
    const sanitizedCountry = DOMPurify.sanitize(country.value);
    const sanitizedEmail = DOMPurify.sanitize(email.value);

    if (!module || !entity.value || !country.value || !email.value) {
      showSnackbar(t('fillFields'), 'error');
      recaptcha.current.reset();
      setLoading(false);
      return;
    }

    if (!sanitizedModule) {
      showSnackbar(t('invalidOrEmpty', { field: t('module') }), 'error');
      recaptcha.current.reset();
      setLoading(false);
      return;
    }

    if (!sanitizedEntity || entity.error) {
      showSnackbar(t('invalidOrEmpty', { field: t('entity') }), 'error');
      recaptcha.current.reset();
      setLoading(false);
      return;
    }

    if (!sanitizedCountry || country.error) {
      showSnackbar(t('invalidOrEmpty', { field: t('country') }), 'error');
      recaptcha.current.reset();
      setLoading(false);
      return;
    }

    if (!sanitizedEmail || email.error) {
      showSnackbar(t('invalidOrEmpty', { field: t('email') }), 'error');
      recaptcha.current.reset();
      return;
    }

    try {
      const isHuman = await reCaptcha({ recaptcha });
      if (isHuman.success) {
        await sendEmail({ name: sanitizedEntity, subject: sanitizedModule, email: sanitizedEmail, message: `${sanitizedEntity} - ${sanitizedCountry}` });
        resetForm();
      }
    } catch (error) {
      showSnackbar(t('invalidCaptcha'), 'error');
    }

    recaptcha.current.reset();
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className='2xl:max-w-[720px] max-w-[480px] w-full flex flex-col'>
      <Dropdown options={moduleOptions} id='module' title='module' placeholder='typeModule' state={module} setState={setModule} variant='greenInput' />
      <Input id='entity' title='entity' placeholder='typeEntity' state={entity} setState={setEntity} variant='greenInput' regex={entityRegex} />
      <Input id='countries' list='country' options={options} title='country' placeholder='typeCountry' state={country} setState={setCountry} variant='greenInput' />
      <Input id='given-email' title='email' type='email' placeholder='typeEmail' state={email} setState={setEmail} variant='greenInput' regex={emailRegex} />
      <ReCAPTCHA ref={recaptcha} sitekey={SITE_KEY} size='invisible' />
      <Button id='submit' type='submit' title='send' variant='greenButton' isLoading={loading} />
    </form>
  );
}
