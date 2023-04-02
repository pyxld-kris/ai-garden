import React from "react";
import Link from "next/link";
import {
  AccountMenuDropdownItem,
  AccountMenuDropdownButton,
  MenuButton,
} from "./StyledAccountDropdown";

export default function AccountDropdown(props) {
  return (
    <div>
      {props.userData?.id ? (
        <AccountMenuDropdownButton
          toggleBtnText="Menu"
          dropdownItems={
            <>
              {" "}
              <AccountMenuDropdownItem>
                <Link href="/user-profile" passHref>
                  <a>Visit Account Page</a>
                </Link>
              </AccountMenuDropdownItem>
            </>
          }
        ></AccountMenuDropdownButton>
      ) : (
        <MenuButton fontSize="1.2rem" href={env().GOOGLE_AUTH_URL}>
          Sign In{" "}
        </MenuButton>
      )}
    </div>
  );
}
