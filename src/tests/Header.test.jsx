import { describe, expect, test } from "vitest";
import Header from "../components/Header";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { resizeWindow } from "@testing-library/react/pure";

import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  test("header render correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  test("logo rendered correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const logo = screen.getAllByText(/walia jobs/i);
    expect(logo[0]).toBeInTheDocument();
    expect(logo.length).toBe(2);
  });

  test("Menu is closed initially", () => {
    window.resizeTo(300, 1000);
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>

      // TODO:  add more tests here
    );
    const menu = screen.getByTestId("menu");

    expect(menu).toBeInTheDocument();
  });
});

describe("Header", () => {
  test("header is responsive", () => {
    // Test for large screen size
    window.innerWidth = 1200;
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByTestId("menu")).toBeVisible();

    // Test for small screen size
    window.innerWidth = 600;
    window.dispatchEvent(new Event("resize"));
    expect(screen.getByTestId("menu")).toBeVisible();

    // Test for medium screen size
    window.innerWidth = 900;
    window.dispatchEvent(new Event("resize"));
    expect(screen.getByTestId("menu")).toBeVisible();

    // You can add more tests for different screen sizes

    // You can also simulate user interactions to test the behavior of the header
    window.innerWidth = 600;
    window.dispatchEvent(new Event("resize"));
    const menuButton = screen.getByTestId("open_menu_humberger");
    fireEvent.click(menuButton);
    // userEvent.click(menuButton);
    expect(screen.getByTestId("menu")).toBeVisible();
  });

  test("When open menu humberger clicked opens the menu", () => {
    window.innerWidth = 600;
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const menu = screen.getByTestId("menu");
    const open_menu_humberger = screen.getByTestId("open_menu_humberger");
    fireEvent.click(open_menu_humberger);
    expect(menu).toBeVisible();
  });

  test("When close menu humberger clicked close the menu", async () => {
    window.innerWidth = 600;
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const menu = screen.getByTestId("menu");
    console.log("Before click: ", menu);

    const close_menu_humberger = screen.getByTestId("close_menu_humberger");
    fireEvent.click(close_menu_humberger);
    await waitFor(() => {
      console.log("After click: ", menu);
      expect(menu).not.toBeInTheDocument();
    });
  });
});
