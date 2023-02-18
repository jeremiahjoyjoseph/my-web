import resume_pdf from "../assets/files/JeremiahJoyJosephResume.pdf";
export const cv_data = {
  title: "CV",
  dark_mode_switch: true,
  go_back_available: true,
  subtitle: {
    type: "text",
    data: [],
  },
  cards: [
    {
      title: "Download",
      subtitle: "as pdf",
      clickToAction: "download",
      file: resume_pdf,
      fileName: "JeremiahJoyJoseph_Resume.pdf",
    },
  ],
};
