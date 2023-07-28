import styled from "styled-components";
import IphoneFrame from "@/assets/img/iphone_frame.png";
import { FaBatteryHalf, FaWifi, FaSignal } from "react-icons/fa";
import { useRef, useState } from "react";

interface IphoneInterfaceProps {
  appName: string;
  selectedIcon?: string;
}

export default function Iphone({
  appName,
  selectedIcon,
}: IphoneInterfaceProps) {
  const [selectedWallpaper, setSelectedWallpaper] = useState("");

  const wallpaperRef = useRef<HTMLInputElement>(null);

  const defaultApps = [
    {
      name: "WhatsApp",
      icon: "data:image/png;base64,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",
    },
    {
      name: "Instagram",
      icon: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square2-512.png",
    },
    {
      name: "Twitch",
      icon: "https://img.freepik.com/vetores-premium/logotipo-do-twitch_578229-259.jpg?w=2000",
    },
    {
      name: "Twitter",
      icon: "https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png",
    },
    {
      name: "Youtube",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/2048px-YouTube_social_white_square_%282017%29.svg.png",
    },
    {
      name: "Spotify",
      icon: "https://www.freeiconspng.com/uploads/spotify-icon-2.png",
    },
    {
      name: "Netflix",
      icon: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    },
    {
      name: appName,
      icon:
        selectedIcon ||
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/White_square_50%25_transparency.svg/768px-White_square_50%25_transparency.svg.png",
    },
    {
      name: "Wallpaper",
      icon: "https://icon-library.com/images/iphone-settings-icon/iphone-settings-icon-17.jpg",
    },
  ];

  function getCurrentTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  function onClickWallpaper() {
    if (wallpaperRef.current) {
      wallpaperRef.current.click();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onChangeWallpaper(e: any) {
    const file = e.target.files[0];
    const data = URL.createObjectURL(file);
    setSelectedWallpaper(data);
  }

  return (
    <IphoneFrameContainer>
      <HiddenInput
        type="file"
        accept="image/*"
        ref={wallpaperRef}
        onChange={onChangeWallpaper}
      />
      <IphoneWallpaper>
        <IphoneWallpaperImage
          src={
            selectedWallpaper ||
            "https://cdn.osxdaily.com/wp-content/uploads/2022/06/ios-16-default-wallpaper-light.jpg"
          }
        />
      </IphoneWallpaper>
      <IphoneFrameImage src={IphoneFrame} />
      <IphoneInterface>
        <IphoneTopBar>
          <Time>{getCurrentTime()}</Time>
          <IconsContainer>
            <FaSignal />
            <FaWifi />
            <FaBatteryHalf />
          </IconsContainer>
        </IphoneTopBar>
        <AppIconsContainer>
          {defaultApps.map((app) => (
            <AppIcon>
              {app.name === "Wallpaper" ? (
                <SpecialAppIconImage
                  onClick={onClickWallpaper}
                  src={app.icon}
                />
              ) : (
                <AppIconImage src={app.icon} />
              )}

              <AppIconName>
                {app.name.replace(/(.{7})..+/, "$1...")}
              </AppIconName>
            </AppIcon>
          ))}
        </AppIconsContainer>
        <IphoneBottomBar>
          <AppIconImage src="https://www.ggplaw.co.uk/wp-content/uploads/2020/03/iphone-phone-logo.png" />
          <AppIconImage src="https://i.imgur.com/gEDvfce.png" />
          <AppIconImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IMessage_logo.svg/1200px-IMessage_logo.svg.png" />
          <AppIconImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0w5GvI3wmp6uKM3pnzP6FHsrHEsynFAx5Xg&usqp=CAU" />
        </IphoneBottomBar>
      </IphoneInterface>
    </IphoneFrameContainer>
  );
}

const IphoneFrameContainer = styled.div`
  position: relative;
  width: 100%;
  width: 420px;
  height: 780px;
  overflow: hidden;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IphoneFrameImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;

  z-index: 1;
`;

const IphoneWallpaper = styled.div`
  position: absolute;
  max-width: 380px;
  height: 100%;
  object-fit: cover;
  filter: blur(2px);
`;

const IphoneWallpaperImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 90px;
`;

const IphoneInterface = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 750px;
  top: 15px;
  bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  z-index: 2;
`;

const IphoneTopBar = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const Time = styled.div`
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.regular};
  letter-spacing: 1px;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

const AppIconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin-top: 40px;
  gap: 20px;
`;

const AppIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

const AppIconImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 10px;
  image-rendering: crisp-edges;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function hex2rgba(hex: any, alpha = 1) {
  const [r, g, b] = hex.match(/\w\w/g).map((x: string) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
}

const SpecialAppIconImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 10px;
  image-rendering: crisp-edges;
  cursor: pointer;
  transition: all 0.2s ease;
  animation-name: pulse;
  animation-duration: 1s;
  animation-iteration-count: infinite;

  @keyframes pulse {
    0% {
      transform: rotate(0deg);
      box-shadow: 0 0 10px 1px
        ${(props) => hex2rgba(props.theme.colors.white, 0.2)};
    }
    25% {
      transform: rotate(5deg);
      box-shadow: 0 0 10px 5px
        ${(props) => hex2rgba(props.theme.colors.white, 0.2)};
    }
    50% {
      transform: rotate(-5deg);
      box-shadow: 0 0 10px 5px
        ${(props) => hex2rgba(props.theme.colors.white, 0.2)};
    }
    75% {
      transform: rotate(5deg);
      box-shadow: 0 0 10px 1px
        ${(props) => hex2rgba(props.theme.colors.white, 0.2)};
    }
    100% {
      transform: rotate(0deg);
      box-shadow: 0 0 10px 1px
        ${(props) => hex2rgba(props.theme.colors.white, 0.2)};
    }
  }

  &:hover {
    opacity: 0.5;
  }
`;

const AppIconName = styled.div`
  font-size: 11px;
  font-family: ${(props) => props.theme.fonts.ultralight};
  margin-top: 10px;
  letter-spacing: 1px;
`;

const IphoneBottomBar = styled.div`
  position: absolute;
  align-self: center;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${(props) => props.theme.colors.backgroundDark};
  bottom: 20px;
  border-radius: 20px;

  img {
    width: 45px;
    height: 45px;
  }
`;

const HiddenInput = styled.input`
  display: none;
`;
