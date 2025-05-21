import { saveAs } from "file-saver";
import _ from "lodash";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useTheme } from "../../../hooks/useTheme";
import { cardsAnimation } from "../../../utils/animationConfig";
import { slideUp } from "../../../utils/animations";
import Icon from "../../atoms/Icon";
import MotionDiv from "../../atoms/MotionDiv";
import { cardClickDelay } from "./util";

const Card = (props) => {
  const { theme } = useTheme();

  const navigate = useNavigate();

  const handleClick = _.debounce(() => {
    switch (props.data.clickToAction) {
      case "navigate":
        navigate(`${props.data.route}`);
        break;
      case "external":
        window.open(props.data.link, "_blank");
        break;
      case "download":
        saveAs(props.data.file, "JeremiahJoyJoseph_Resume.pdf");
        break;
      case "mail":
        let params = props.data.subject || props.data.body ? "?" : "";
        if (props.data.subject)
          params += `subject=${encodeURIComponent(props.data.subject)}`;
        if (props.data.body)
          params += `${props.data.subject ? "&" : ""}body=${encodeURIComponent(
            props.data.body
          )}`;
        window.open(`mailto:${props.data.email}${params}`);
        break;
      default:
        break;
    }
  }, cardClickDelay);

  return (
    <MotionDiv
      variants={slideUp(cardsAnimation.startAfter)}
      initial="hidden"
      animate="visible"
      className="transition-all duration-300 hover:scale-[1.02]"
    >
      <NeuCardButton
        onClick={handleClick}
        style={props.style}
        theme={theme}
        {...props}
        className="group"
      >
        <CardTitle className="flex items-center font-bold">
          {props.data.title}
          {props.data.clickToAction && (
            <Icon 
              name="arrow_up_right" 
              className="ml-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" 
            />
          )}
        </CardTitle>
        <CardSubtitle theme={theme} className="mt-1 text-left">
          {props.data.subtitle}
        </CardSubtitle>
      </NeuCardButton>
    </MotionDiv>
  );
};

const CardTitle = styled.h3``;

const CardSubtitle = styled.h4`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const NeuCardButton = styled.button`
  margin-top: ${({ index }) => (index === 0 ? "0px" : "20px")};
  min-height: 93px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.body.background};
  border-radius: 5px;
  width: 100%;
  border: none;
  box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.04),
              inset 4px 4px 8px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: -8px -8px 16px rgba(255, 255, 255, 0.04),
                8px 8px 16px rgba(0, 0, 0, 0.16);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: -4px -4px 8px rgba(255, 255, 255, 0.04),
                4px 4px 8px rgba(0, 0, 0, 0.16);
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    &:active {
      box-shadow: -8px -8px 16px rgba(255, 255, 255, 0.04),
                  8px 8px 16px rgba(0, 0, 0, 0.16);
      transform: translateY(-2px);
    }
  }
`;

export default Card;
