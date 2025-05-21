import resume_pdf from "../assets/files/JeremiahJoyJosephResume.pdf";
export const home_data = {
  title: "Jeremiah Joy Joseph",
  animation: {
    startAfter: 0, //in milliSec
  },
  dark_mode_switch: true,
  go_back_available: false,
  subtitle: {
    type: "text",
    data: [
      {
        title: "front-end developer",
        clickToAction: "navigate",
        route: "/projects",
        animation: {
          startAfter: 2000, //in milliSec
        },
      },
      
    ],
  },
  cards: {
    projects: {
      title: "Projects",
      route: "/projects",
      subtitle: "Dev",
      clickToAction: "navigate",
    },
    cv: {
      title: "CV",
      subtitle: "Download",
      clickToAction: "download",
      file: resume_pdf,
      fileName: "JeremiahJoyJoseph_Resume.pdf",
    },
    designs: {
      title: "Designs",
      route: "/designs",
      subtitle: "UI/UX",
      clickToAction: "navigate",
      disabled:true
    },
    music: {
      title: "Music",
      subtitle: "Listen",
      route: "/music",
      clickToAction: "navigate",
      disabled:true
    },
    contact: {
      title: "Get in touch",
      subtitle: "via Mail",
      clickToAction: "mail",
      email: "mail.jeremiahjoseph@gmail.com",
      subject: "Sending out a hello!",
      body: "Hey!",
    },
  },
  cardsAnimation: {
    startAfter: 0.5, //in Sec
  },
};

//**Click to action */
//navigate
//external
//download
//null
