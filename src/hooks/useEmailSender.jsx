import axios from 'axios';
import { useState } from 'react';
import { showSnackbar } from '../contexts/SnackbarContext';
import { useTranslation } from 'react-i18next';

export function useEmailSender () {
  const { t } = useTranslation();
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (body, file) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('name', body.name);
    formData.append('email', body.email);
    formData.append('message', body.message);
    formData.append('subject', body.subject);
    formData.append('document', file);

    await axios({
      method: 'post',
      url: import.meta.env.VITE_HOST_SERVER,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(response => {
        const info = response.data;
        setResponse(info);
        showSnackbar(t('responseEmail'), 'success');
      })
      .catch(error => {
        setError(error);
        showSnackbar(t('errorEmail'), 'error');
        throw error;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { sendEmail, response, error, isLoading };
}
