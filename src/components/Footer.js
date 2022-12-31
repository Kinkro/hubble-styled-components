import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src={require("../images/logo_white.svg")} alt="" />
        <Flex>
          <ul>
            <li>lorem importsda kjankdsjnlas dnlaksjdkla sd alksdalksjd</li>
            <li>+1-453-456-4563</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career </li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; 2022</p>
      </Container>
    </StyledFooter>
  );
}
