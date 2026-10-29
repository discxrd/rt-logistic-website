import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    requestType: 'logistics',
    name: '',
    email: '',
    phone: '',
    company: '',
    cargoType: '',
    destination: '',
    comments: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (): boolean => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Invalid email';
    if (!formData.phone) newErrors.phone = 'Phone is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true); // Начало отправки
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Form submitted successfully');
          setIsSubmitted(true);
        } else {
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const inputClasses = `mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-ring focus:border-ring bg-background text-foreground placeholder-muted-foreground`;
  const errorBorder = 'border-destructive';
  const normalBorder = 'border-input';

  if (isSubmitted) {
    return (
      <div
        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative text-center"
        role="alert"
      >
        <strong className="font-bold">{t('contactPage.form.success')}</strong>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="requestType"
          className="block text-sm font-medium text-foreground"
        >
          {t('contactPage.form.requestType')}*
        </label>
        <select
          name="requestType"
          id="requestType"
          value={formData.requestType}
          onChange={handleChange}
          className={`${inputClasses} ${errors.requestType ? errorBorder : normalBorder
            }`}
          required
        >
          <option value="" disabled>
            {t('contactPage.form.requestTypePlaceholder')}
          </option>
          <option value="logistics">
            {t('contactPage.form.requestTypeOptions.logistics')}
          </option>
          <option value="metalworking">
            {t('contactPage.form.requestTypeOptions.metalworking')}
          </option>
        </select>
        {errors.requestType && (
          <p className="text-destructive text-xs mt-1">{errors.requestType}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            {t('contactPage.form.name')}*
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`${inputClasses} ${errors.name ? errorBorder : normalBorder
              }`}
          />
          {errors.name && (
            <p className="text-destructive text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            {t('contactPage.form.email')}*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`${inputClasses} ${errors.email ? errorBorder : normalBorder
              }`}
          />
          {errors.email && (
            <p className="text-destructive text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground">
            {t('contactPage.form.phone')}*
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`${inputClasses} ${errors.phone ? errorBorder : normalBorder
              }`}
          />
          {errors.phone && (
            <p className="text-destructive text-xs mt-1">{errors.phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground">
            {t('contactPage.form.company')}
          </label>
          <input
            type="text"
            name="company"
            id="company"
            value={formData.company}
            onChange={handleChange}
            className={`${inputClasses} ${normalBorder}`}
          />
        </div>
        <div>
          <label htmlFor="cargoType" className="block text-sm font-medium text-foreground">
            {t('contactPage.form.cargoType')}
          </label>
          <input
            type="text"
            name="cargoType"
            id="cargoType"
            value={formData.cargoType}
            onChange={handleChange}
            className={`${inputClasses} ${normalBorder}`}
          />
        </div>
        <div>
          <label
            htmlFor="destination"
            className="block text-sm font-medium text-foreground"
          >
            {t('contactPage.form.destination')}
          </label>

          <input
            type="text"
            name="destination"
            id="destination"
            value={formData.destination}
            onChange={handleChange}
            className={`${inputClasses} ${normalBorder}`}
          />
        </div>
      </div>
      <div>
        <label htmlFor="comments" className="block text-sm font-medium text-foreground">
          {t('contactPage.form.comments')}
        </label>
        <textarea
          name="comments"
          id="comments"
          rows={4}
          value={formData.comments}
          onChange={handleChange}
          className={`${inputClasses} ${normalBorder}`}
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting} // Отключаем кнопку во время отправки
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring transition-colors disabled:opacity-50"
        >
          {isSubmitting
            ? t('contactPage.form.submitting')
            : t('contactPage.form.submit')}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;