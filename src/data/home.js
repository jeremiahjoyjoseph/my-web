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
      {
        title: 'musician',
        clickToAction: 'external',
        link: 'https://www.instagram.com/invites/contact/?i=bsjsq0410t6p&utm_content=fsw1nz8',
      },
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
      subtitle: 'View or Download',
      clickToAction: 'navigate',
      route: 'cv',
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
      route: 'music',
      clickToAction: 'navigate',
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
