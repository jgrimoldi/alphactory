import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import DOMPurify from 'dompurify';

import { Button, Input, TextArea } from '../Inputs/index';
import { emailRegex, fullNameRegex } from '../../constants/REGEX';
import { showSnackbar } from '../../contexts/SnackbarContext';
import { useEmailSender } from '../../hooks/useEmailSender';
import { reCaptcha } from '../../utils/reCaptcha';
import { useTranslation } from 'react-i18next';

export function ContactForm () {
  const { t } = useTranslation();
  const { sendEmail } = useEmailSender();
  const initialValues = { value: '', error: null };
  const [name, setName] = useState(initialValues);
  const [email, setEmail] = useState(initialValues);
  const [message, setMessage] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const SITE_KEY = import.meta.env.VITE_RECAPTCHA_CLIENT;
  const recaptcha = useRef();

  const resetForm = () => {
    setName(initialValues);
    setEmail(initialValues);
    setMessage(initialValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const sanitizedEmail = DOMPurify.sanitize(email.value);
    const sanitizedName = DOMPurify.sanitize(name.value);
    const sanitizedMessage = DOMPurify.sanitize(message.value);

    if (!name.value || !email.value || !message.value) {
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

    if (!sanitizedEmail || email.error) {
      showSnackbar(t('invalidOrEmpty', { field: t('email') }), 'error');
      recaptcha.current.reset();
      setLoading(false);
      return;
    }

    if (!sanitizedMessage || message.error) {
      showSnackbar(t('invalidOrEmpty', { field: t('message') }), 'error');
      recaptcha.current.reset();
      setLoading(false);
      return;
    }

    try {
      const isHuman = await reCaptcha({ recaptcha });
      if (isHuman.success) {
        await sendEmail({ name: sanitizedName, subject: 'Contacto desde Alphactory!', email: sanitizedEmail, message: sanitizedMessage });
        resetForm();
      }
    } catch (error) {
      showSnackbar(t('invalidCaptcha'), 'error');
    }

    setLoading(false);
    recaptcha.current.reset();
  };

  return (
    <form id='contact' onSubmit={handleSubmit} className='2xl:max-w-[720px] max-w-[480px] w-full flex flex-col'>
      <Input id='name' title='fullName' placeholder='typeName' state={name} setState={setName} regex={fullNameRegex} />
      <Input id='email' title='email' type='email' placeholder='typeEmail' state={email} setState={setEmail} regex={emailRegex} />
      <TextArea id='message' title='message' placeholder='typeMessage' state={message} setState={setMessage} />
      <ReCAPTCHA ref={recaptcha} sitekey={SITE_KEY} size='invisible' />
      <Button id='submit' type='submit' title='send' isLoading={loading} />
    </form>
  );
}
