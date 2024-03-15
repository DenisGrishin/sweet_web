import { ContactandTime } from './ContactandTime';
import LoginPopup from './LoginPopup';
import { TitleSite } from './TitleSite';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { NavMenu } from './NavMenu';
import { Container } from '../common/Container';

export const Header = () => {
  return (
    <header className="pt-8  pb-5 space-y-16">
      <Container>
        <div className="flex justify-between items-center flex-wrap pb-10">
          <div className="flex items-center gap-x-4 xl:gap-x-8 order-1 ">
            <BurgerMenu />
            <ContactandTime />
          </div>
          <TitleSite />
          <LoginPopup />
        </div>
        <div className="xl:hidden ">
          <NavMenu />
        </div>
      </Container>
    </header>
  );
};
