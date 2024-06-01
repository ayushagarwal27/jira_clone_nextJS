//
import { describe, test } from "@jest/globals";
// import { render, screen } from "@testing-library/react";
// import { NavBar } from "@/components/Nav/nav";
// import { navData } from "@/lib/navData";
// import { NavDataType } from "@/components/Nav/nav.type";
// import customHook from "@/hooks";
// import * as nextAuth from "next-auth/react";

describe("Navbar test", () => {
  test("should render navbar when unauthenticated", () => {
    //   jest.spyOn(nextAuth, "useSession").mockImplementation(() => ({
    //     data: {
    //       user: { image: "" },
    //     },
    //     status: "unauthenticated",
    //   }));
    //   // render navbar
    //   const { queryByTestId, queryByText } = render(
    //     <NavBar externalNavData={navData as NavDataType} />,
    //   );
    //
    //   // query--items
    //   const profileShimmerEl = queryByTestId("profile_shimmer");
    //   expect(profileShimmerEl).not.toBeInTheDocument();
    //
    //   const loginBtn = queryByTestId("login_btn");
    //   expect(loginBtn).toBeInTheDocument();
    //
    //   const yourWorkText = queryByText("Your Work");
    //   expect(yourWorkText).not.toBeInTheDocument();
    // });
    //
    // test("should render navbar when authenticated", () => {
    //   jest.spyOn(nextAuth, "useSession").mockImplementation(() => ({
    //     data: {
    //       user: { image: "" },
    //     },
    //     status: "authenticated",
    //   }));
    //   const { queryByTestId, queryByText } = render(
    //     <NavBar externalNavData={navData as NavDataType} />,
    //   );
    //   const profileShimmerEl = queryByTestId("profile_shimmer");
    //   expect(profileShimmerEl).toBeInTheDocument();
    //
    //   const loginBtn = queryByTestId("login_btn");
    //   expect(loginBtn).not.toBeInTheDocument();
    //
    //   const yourWorkText = queryByText("Your Work");
    //   expect(yourWorkText).toBeInTheDocument();
  });

  // test("navbar in mobile view", () => {
  //   jest
  //     .spyOn(nextAuth, "useSession")
  //     .mockImplementation(() => ({
  //       data: {
  //         user: {
  //           image:
  //             "https://lh3.googleusercontent.com/a/ACg8ocJZsCJMiGTT9OQza1a0YoDtAIM00joFqnoouKzajfUhDnI=s96-c",
  //         },
  //       },
  //       status: "authenticated",
  //     }));
  //   jest
  //     .spyOn(customHook, "useWindowDimensions")
  //     .mockImplementation(() => ({
  //       windowDimensions: { width: 300, height: 300 },
  //       isDesktop: false,
  //     }));
  //
  //   const { getByTestId } = render(<NavBar />);
  //   const hamburgerIcon = getByTestId("hamburger_icon");
  //   expect(hamburgerIcon).toBeInTheDocument();
  // });
});
