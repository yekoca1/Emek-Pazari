import { getCurrentUSer } from "@/app/actions/getCurrentUSer";
import CardCount from "./CardCount";
import IconMenu from "./IconMenu";
import Logo from "./Logo";
import Search from "./Search";
import User from "./User";

async function Navbar() {
  const currentUSer = await getCurrentUSer();
  return (
    <>
      <div className="flex items-center justify-between gap-3 md:gap-10 px-3 md: px-10 h-16 bg-purple-500">
        <Logo />
        <Search />
        <CardCount />
        <User currentUser={currentUSer} />
        <IconMenu />
      </div>
    </>
  );
}

export default Navbar;
