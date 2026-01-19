import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import vi from './vi.json'
import en from './en.json'

// Lấy ngôn ngữ đã lưu trong localStorage hoặc mặc định là tiếng Việt
const savedLanguage = localStorage.getItem('language') || 'vi'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      vi: { translation: vi },
      en: { translation: en }
    },
    lng: savedLanguage,
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
