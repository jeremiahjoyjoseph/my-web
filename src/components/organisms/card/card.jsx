import { saveAs } from "file-saver";
import _ from "lodash";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { useTheme } from "../../../hooks/useTheme";
import { cardsAnimation } from "../../../utils/animationConfig";
import { slideUp } from "../../../utils/animations";
import Icon from "../../atoms/Icon";
import MotionDiv from "../../atoms/MotionDiv";
import { cardClickDelay } from "./util";

const Card = (props) => {
  const { theme } = useTheme();
  let location = useLocation();
  const navigate = useNavigate();

  const handleClick = _.debounce(() => {
    switch (props.data.clickToAction) {
      case "navigate":
        navigate(`/${props.data.route}`);
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
      case "navigateNested":
        navigate(`${location.pathname}/${props.data.route}`);
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
    >
      <NeuCardButton
        onClick={handleClick}
        style={props.style}
        theme={theme}
        {...props}
      >
        <CardTitle className="bold">
          {props.data.title}
          {props.data.clickToAction && (
            <Icon name="arrow_up_right" style={{ marginLeft: 5 }} />
          )}
        </CardTitle>
        <CardSubtitle theme={theme}>{props.data.subtitle}</CardSubtitle>
      </NeuCardButton>
    </MotionDiv>
  );
};

const CardTitle = styled.h3`
  display: flex;
  align-items: center;
`;

const CardSubtitle = styled.h4`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: 5px;
  text-align: left;
`;

const NeuCardButton = styled.button`
  margin-top: ${({ index }) => (index === 0 ? "0px" : "20px")};
  height: 93px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px 0px 16px;
  background-color: ${(props) => props.theme.colors.cardColors[props.index]};
  border-radius: 5px;
  width: 100%;
  border: none;
  box-shadow: -8px -8px 12px rgba(255, 255, 255, 0.04),
    8px 8px 12px rgba(0, 0, 0, 0.16);

  cursor: pointer;

  &:active {
    box-shadow: -8px -8px 12px rgba(255, 255, 255, 0.04) inset,
      8px 8px 12px rgba(0, 0, 0, 0.16) inset;
  }
`;

export default Card;
