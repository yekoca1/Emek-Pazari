import CardCount from "./CardCount";
import IconMenu from "./IconMenu";
import Logo from "./Logo";
import Search from "./Search";
import User from "./User";

function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between gap-3 md:gap-10 px-3 md: px-10 h-16 bg-purple-500">
        <Logo />
        <Search />
        <CardCount />
        <User />
        <IconMenu />
      </div>
    </>
  );
}

export default Navbar;
