import React from 'react';
import { Link } from 'react-router-dom';
import '../../locales/i18n'
import './home.css'
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="bg-gradient-to-r from-blue-100 to-green-100 min-h-screen flex items-center justify-center py-12">
      
      <div className="container max-w-6xl mx-auto p-8 bg-white rounded-3xl shadow-2xl">
      <div className="home-container">
      
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ta')}>Tamil</button>
        <button onClick={() => changeLanguage('hi')}>Hindi</button>
      </div>
      
    </div>
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-8">
        {t('welcome')}
        </h1>
        <p className="text-2xl text-center text-gray-700 mb-12">
          {t('home_page_intro')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {t('for_farmers')}
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>{t('connect_with_buyers')}</li>
              <li>{t('manage_contracts')}</li>
              <li>{t('secure_payments')}</li>
              <li>{t('collaborate')}</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {t('for_buyers')}
            </h2>
            <ul className="list-disc list-inside text-gray-700">
            <li>{t('find_reliable_farmers')}</li>
              <li>{t('purchase_products')}</li>
              <li>{t('secure_options')}</li>
              <li>{t('track_order')}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">
          {t('why_choose_us')}
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-center space-y-2">
          <li>{t('verification')}</li>
            <li>{t('escrow_account')}</li>
            <li>{t('chat_application')}</li>
            <li>{t('status_updates')}</li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/signup"
            className="inline-block bg-green-500 text-white text-lg px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
          >
            {t('get_started')}
            </Link>
        </div>
        
      </div>
     
    </div>
  );
};

export default Home;