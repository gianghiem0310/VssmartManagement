// i18n.js

import i18n from 'i18n-js';
// Import các file ngôn ngữ từ thư mục locales
import viVN from './locales/vi_VN.json'; // ví dụ: tệp dịch ngôn ngữ tiếng Việt

// Thiết lập dữ liệu dịch
i18n.translations = {
    vi: viVN,
    // Thêm các ngôn ngữ khác nếu cần
};

// Thiết lập ngôn ngữ mặc định
i18n.Locales = 'vi'; // Ngôn ngữ mặc định là tiếng Việt

export default i18n.Locales;
