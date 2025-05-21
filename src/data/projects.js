export const projects_data = {
  title: "Projects",
  animation: {
    startAfter: 0,
  },
  dark_mode_switch: true,
  go_back_available: true,
  subtitle: {
    type: "icon",
    data: [],
  },
  cards: {
    blr_airport_website: {
      title: "BLR Airport Website",
      subtitle: "Bangalore Airport Website",
      clickToAction: "navigate",
      route: "/projects/pulse",
    },
    compass: {
      title: "Compass",
      subtitle: "employee solution mobile app",
      clickToAction: "external",
      link: "https://play.google.com/store/apps/details?id=com.bial.compass&hl=en&gl=US",
    },
    blr_airport_app: {
      title: "BLR Airport App",
      subtitle: "employee solution mobile app",
      clickToAction: "external",
      link: "https://play.google.com/store/apps/details?id=com.bial.edp&hl=en_IN",
    },
    carbon_care: {
      title: "Carbon-Care",
      subtitle: "a swedish based company's analytics/display dashboard",
    },
  },
  cardsAnimation: {
    startAfter: 0.5,
  },
  data:{
    pulse:{
      title: "Pulse",
      dark_mode_switch: true,
      go_back_available: true,
      subtitle: {
        type: "text",
        data: [
          {
            title: "BLR Airport Website -- modules I have developed.",
          },
        ],
      },
      cards: [
        {
          title: "BLR Airport Website",
          subtitle: "Bangalore Airport Website Homepage",
          clickToAction: "external",
          link: "https://www.bengaluruairport.com",
        },
        {
          title: "Cabs",
          subtitle: "Book airport cabs -- mobile and desktop",
          clickToAction: "external",
          link: "https://www.bengaluruairport.com/cabs",
        },
        {
          title: "Lounge",
          subtitle: "Pre-book airport lounges -- mobile and desktop",
          clickToAction: "external",
          link: "https://www.bengaluruairport.com/travellers/at-the-airport/relax/lounges",
        },
        {
          title: "Hotel",
          subtitle: "Hotel booking journey -- mobile and desktop",
          clickToAction: "external",
          link: "https://www.bengaluruairport.com/travellers/at-the-airport/relax/080-Transit-Hotel",
        },
        {
          title: "Duty Free",
          subtitle: "Duty Free shopping -- mobile and desktop",
          clickToAction: "external",
          link: "https://www.bengaluruairport.com/duty-free?domain=Duty%20Free",
        },
      
      ],
    },
    
  }
};
