export const home_data = {
  title: 'Jeremiah Joy Joseph',
  dark_mode_switch: true,
  go_back_available: false,
  subtitle: {
    type: 'text',
    data: [
      {
        title: 'front-end developer',
        clickToAction: 'navigate',
        route: 'projects',
      },
      {
        title: 'designer',
        clickToAction: 'navigate',
        route: 'designs',
      },
      { title: 'musician', clickToAction: 'external', link: '' },
    ],
  },
  cards: {
    projects: {
      title: 'Projects',
      route: 'projects',
      subtitle: 'Dev',
      clickToAction: 'navigate',
    },
    cv: {
      title: 'CV',
      subtitle: 'Click to download',
      clickToAction: 'download',
      file: '',
    },
    designs: {
      title: 'Designs',
      route: 'designs',
      subtitle: 'UI/UX',
      clickToAction: 'navigate',
    },
    music: {
      title: 'Music',
      subtitle: 'Listen',
      clickToAction: 'external',
      link: '',
    },
    contact: {
      title: 'Get in touch',
      subtitle: 'via Mail',
      clickToAction: 'external',
      link: '',
    },
  },
};

//**Click to action */
//navigate
//external
//download
//null
