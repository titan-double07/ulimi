import Image from "next/image";
import Logo from "./Logo";
import SeachBar from "./SeachBar";

export default function NavBar() {
  return (
    <header className="bg-white flex items-center px-5 py-5 justify-between  ">
      {/* logo group */}
      <div className="flex items-center gap-20">
        <Logo />
        {/* searchBar */}
        <div className="lg:block hidden">
          <SeachBar />
        </div>
      </div>

      {/* user group */}
      <div className="flex items-center gap-3">
        {/* notification */}
        <div className="bg-gray-100 p-1 size-7 flex items-center justify-center rounded-full">
          <Image
            src="/bell-icon.png"
            alt="notification"
            width={14}
            height={14}
            className=""
          />
        </div>
        {/* user profile */}
        <Image
          src="/user-img.png"
          alt="notification"
          width={30}
          height={30}
          className="rounded-full"
        />
        {/* drop-down */}
        <div className="flex items-center gap-1 cursor-pointer">
          <p className="capitalize">Deko</p>
          <Image
            src="/chevron-icon.png"
            alt="notification"
            width={15}
            height={15}
          />
        </div>
      </div>
    </header>
  );
}
