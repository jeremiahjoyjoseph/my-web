export const home_data = {
  title: 'Jeremiah Joy Joseph',
  // animation: {
  //   startAfter: 0, //in milliSec
  // },
  dark_mode_switch: true,
  go_back_available: false,
  subtitle: {
    type: 'text',
    data: [
      {
        title: 'front-end developer',
        clickToAction: 'navigate',
        route: 'projects',
        // animation: {
        //   startAfter: 2000, //in milliSec
        // },
      },
      {
        title: 'designer',
        clickToAction: 'navigate',
        route: 'designs',
        // animation: {
        //   startAfter: 2250, //in milliSec
        // },
      },
      {
        title: 'musician',
        clickToAction: 'external',
        link: 'https://www.instagram.com/invites/contact/?i=bsjsq0410t6p&utm_content=fsw1nz8',
        // animation: {
        //   startAfter: 2500, //in milliSec
        // },
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
      clickToAction: 'mail',
      email: 'jeremiahjoyjoseph97@gmail.com',
      subject: 'Sending out a hello!',
      body: 'Hey!',
    },
  },
  // cardsAnimation: {
  //   startAfter: 3, //in Sec
  // },
};

//**Click to action */
//navigate
//external
//download
//null
