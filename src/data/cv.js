import resume_pdf from '../assets/files/JeremiahJoyJoseph_Resume.PDF';
export const cv_data = {
  title: 'CV',
  dark_mode_switch: true,
  go_back_available: true,
  subtitle: {
    type: 'text',
    data: [],
  },
  cards: [
    {
      title: 'View',
      subtitle: 'an online resume',
      clickToAction: 'external',
      link: 'https://zety.com/profile/jeremiahjoyjoseph',
    },
    {
      title: 'Download',
      subtitle: 'as pdf',
      clickToAction: 'download',
      file: resume_pdf,
    },
  ],
};
