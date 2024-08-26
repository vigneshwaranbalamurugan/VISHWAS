import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../locales/i18n';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [showVideos, setShowVideos] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleCardClick = () => {
    setShowVideos(!showVideos);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[500px]"
        style={{ backgroundImage: "url('src/assets/crop.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">{t('welcome')}</h1>
          <p className="text-2xl text-white mt-4">{t('home_page_intro')}</p>
          <div className="mt-8">
            <button
              onClick={() => changeLanguage('en')}
              className="mx-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              English
            </button>
            <button
              onClick={() => changeLanguage('ta')}
              className="mx-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              தமிழ்
            </button>
            <button
              onClick={() => changeLanguage('hi')}
              className="mx-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              हिंदी
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-semibold mb-4">{t('for_farmers')}</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>{t('connect_with_buyers')}</li>
              <li>{t('manage_contracts')}</li>
              <li>{t('secure_payments')}</li>
              <li>{t('collaborate')}</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-semibold mb-4">{t('for_buyers')}</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>{t('find_reliable_farmers')}</li>
              <li>{t('purchase_products')}</li>
              <li>{t('secure_options')}</li>
              <li>{t('track_order')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Central Section with Three Cards */}
      <div className="container mx-auto my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          onClick={handleCardClick}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">{t('Tutorial video')}</h2>
          <p className="text-center">{t('card_description_1')}</p>

          {/* Show videos when the card is clicked */}
          {showVideos && (
            <div className="mt-4">
              <video className="w-full rounded-lg shadow-lg mb-4" controls>
                <source src="/path/to/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
            </div>
          )}
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-4 text-center">{t('card_title_2')}</h2>
          <p className="text-center">{t('card_description_2')}</p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-4 text-center">{t('card_title_3')}</h2>
          <p className="text-center">{t('card_description_3')}</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-lg">{t('footer_text')}</p>
          <Link
            to="/contact"
            className="block mt-4 text-green-500 hover:text-green-700"
          >
            {t('contact_us')}
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
