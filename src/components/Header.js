import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Button } from "./styles/Button.styled";
import logo from "../images/logo.svg";
import mockups from "../images/illustration-mockups.svg";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} alt="logo" />
          <Button>Try it free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              lorem ipsum asdasdasd asdasdsa asdasfdfascvcsasxcv asdasdasdaxc
              asdsadasdasdasca d a asas as a sa lorem ipsum asdasdasd asdasdsa
              asdasfdfascvcsasxcv asdasdasdaxc asdsadasdasdasca d a asas as a sa
            </p>

            <Button bg="#ff0099" color="#fff">
              Get strarted for free
            </Button>
          </div>
          <Image src={mockups} alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
