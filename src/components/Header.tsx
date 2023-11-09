export interface HeaderProps {
  /**
   * @displayName Logo
   * @tooltip Controls the logo to display in the header
   */
  logo: string;
}

export const Header = ({ logo }: HeaderProps) => {
  return (
    <header className="h-20 border-b text-sm text-gray-900">
      <nav
        className="mx-auto flex h-full items-center justify-between px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/">
            <span className="sr-only">Company logo</span>
            <img className="h-8 w-auto" src={logo} alt="Company logo" />
          </a>
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-6">
          <a
            href="#"
            className="hidden text-gray-900 hover:text-gray-600 lg:block lg:text-sm lg:font-semibold lg:leading-6"
          >
            Log in
          </a>
          {/* <a
            href="#"
            className="mr-2 rounded-md bg-zinc-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 lg:mr-0"
          >
            Sign up
          </a> */}
        </div>
      </nav>
    </header>
  );
};
