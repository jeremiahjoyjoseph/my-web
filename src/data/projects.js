export const projects_data = {
  title: 'Projects',
  dark_mode_switch: true,
  go_back_available: true,
  subtitle: {
    type: 'icon',
    data: [],
  },
  cards: {
    compass: {
      title: 'Compass',
      subtitle: 'employee solution mobile app',
      clickToAction: 'external',
      link: 'https://play.google.com/store/apps/details?id=com.bial.compass&hl=en&gl=US',
    },
    edp: {
      title: 'EDP',
      subtitle: 'full blown airport customer solution',
      clickToAction: 'navigate',
      route: 'projects/edp',
    },
    pax: {
      title: 'PAX',
      subtitle: 'passenger experience solution',
      route: 'projects/pax',
      clickToAction: 'navigate',
    },
    carbon_care: {
      title: 'Carbon-Care',
      subtitle: 'a swedish based company dashboard',
    },
  },
};
