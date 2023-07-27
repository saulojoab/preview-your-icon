import styled from "styled-components";

import { useRef, useState } from "react";
import { Iphone } from "./containers";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();

  const [appName, setAppName] = useState(t("yourAppName"));
  const [selectedIcon, setSelectedIcon] = useState("");

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSelectImage(e: any) {
    const file = e.target.files[0];
    const data = URL.createObjectURL(file);
    setSelectedIcon(data);
  }

  function handleClickToUpload() {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  }

  function toggleLanguage() {
    if (i18n.language === "pt-BR") {
      i18n.changeLanguage("en");
      document.title = "Preview Your Icon";
      return;
    }

    document.title = "Prévia de Ícone";
    i18n.changeLanguage("pt-BR");
  }

  return (
    <Container>
      <SocialsBar>
        <span>{t("madeBy")} Saulo Joab </span>
        <Link onClick={() => open("https://github.com/saulojoab")}>
          <FaGithub size={18} />
        </Link>
        <Link onClick={() => open("https://linkedin.com/in/saulojoab")}>
          <FaLinkedin size={18} />
        </Link>
        <Link onClick={toggleLanguage}>
          {i18n.language === "pt-BR" ? (
            <LiaFlagUsaSolid size={22} />
          ) : (
            <GiBrazilFlag size={18} />
          )}
        </Link>
      </SocialsBar>
      <TitleSubtitleContainer>
        <Title>{t("previewYourIcon")}</Title>
        <Subtitle>{t("wannaSeeHow")}</Subtitle>
      </TitleSubtitleContainer>
      <SelectAndInputContainer>
        <SelectImageButton onClick={handleClickToUpload}>
          {t("selectTheIcon")}
        </SelectImageButton>
        <HiddenInput
          ref={hiddenFileInput}
          type="file"
          accept="image/*"
          onChange={handleSelectImage}
        />
        <AppNameInput
          placeholder={t("andTellMe")}
          onChange={(e) => setAppName(e.target.value)}
        />
      </SelectAndInputContainer>
      <Iphone appName={appName} selectedIcon={selectedIcon} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-size: 110% 110%;
  background: ${({ theme }) =>
    `linear-gradient(45deg, ${theme.colors.primary} 0%, ${theme.colors.black} 50%, ${theme.colors.primary} 100%)`};

  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.white};
  transition: all 0.2s ease-in-out;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-top: 20px;
    padding-bottom: 50px;
    height: 120vh;
  }
`;

const Title = styled.span`
  font-size: 30px;
  font-family: ${(props) => props.theme.fonts.bold};
  margin-bottom: 5px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 25px;
  }
`;

const Subtitle = styled.span`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.thin};
  margin-bottom: 20px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 16px;
  }
`;

const SelectAndInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const SelectImageButton = styled.button`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.thin};
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.backgroundDark};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.white};
    background-color: transparent;
    color: ${(props) => props.theme.colors.white};
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 16px;
  }
`;

const AppNameInput = styled.input`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.thin};
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.white};
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  width: 250px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 16px;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const TitleSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  padding-bottom: 0;
`;

const SocialsBar = styled.div`
  position: absolute;
  bottom: 10px;
  right: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  span {
    font-family: ${({ theme }) => theme.fonts.thin};
  }

  ${({ theme }) => theme.breakpoints.down("sm")} {
    position: relative;
    align-self: center;
    right: 0;
    font-size: 13px;
  }
`;

const Link = styled.a`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
