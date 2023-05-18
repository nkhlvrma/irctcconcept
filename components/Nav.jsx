"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProviders();
  }, []);

  return (
    <div className="flex-between w-screen">
    <nav className="flex-between w-full mb-20 px-4 shadow py-3 nav_color">
      <div className="flex-between gap-3">
        <Link href="/" className="flex-inital gap-2 flex-center">
            <Image
              src="/assets/images/irctclogo.svg"
              alt="Prompts Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <p className="logo_text link_btn">IRCTC</p>
          </Link>
          <Link href="/" className="flex-initial">
            <p className="logo_text2 link_btn">Agent Login</p>
          </Link>
          <Link href="/" className="flex-between gap-2 link_btn">
            <svg className="m-0" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-ring"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path><path d="M4 2C2.8 3.7 2 5.7 2 8"></path><path d="M22 8c0-2.3-.8-4.3-2-6"></path></svg>
            <p className="logo_text2 link_btn">Ask Diksha</p>
          </Link>
      </div> 
      
      

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-2">
            <Link href="/create-prompt" className="black_btn gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>
            Search PNR
            </Link>
            <button type="button" className="link_btn">
              Register
            </button>
            <button type="button" className="black_btn2">
              Log In
            </button>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              width={30}
              height={30}
              alt="User Profile Image"
              className="rounded-full"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                > 
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                > 
                  Create Prompt
                </Link>
                <button
                typeof="button"
                onClick={() => {setToggleDropdown(false);signOut()}}
                className="mt-5 w-full black_btn"
                >
                Sign Out
                </button>
              </div>
            )}
          </div>
        ): (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
    </div>
  );
};

export default Nav;
