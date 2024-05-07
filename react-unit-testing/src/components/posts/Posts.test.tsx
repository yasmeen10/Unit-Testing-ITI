import { test, expect, describe, beforeAll, afterEach, afterAll } from "vitest";
import {
  render,
  act,
  getByText,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

import Posts from "./Posts";

const fakePosts = [
  { id: 5, title: "newPost1", description: "nnnnnnnnnnnnnnnnnnn" },
  { id: 7, title: "newPost2", description: "xxxxxxxxxxxxxxxx" },
];

const server = setupServer(
  http.get("*/posts", () => {
    return HttpResponse.json(fakePosts);
  })
);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("<Posts />", () => {
  test("renders initial loading ", async () => {
    render(<Posts />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("renders PostsData ", async () => {
    render(<Posts />);

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

    const postCards = await screen.getAllByRole("article");
    expect(postCards).toHaveLength(fakePosts.length);

    fakePosts.forEach((postCard, index) => {
      const post = fakePosts[index];
      expect(postCard).toHaveTextContent(post.title);
      expect(postCard).toHaveTextContent(post.description);
    });
  });

  test("render empty message ", async () => {
    server.use(
      http.get("*/posts", () => {
        return HttpResponse.json([]);
      })
    );
    render(<Posts />);

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

    expect(screen.getByText(/No posts/i)).toBeInTheDocument();
  });

  test("render error message  for error in response", async () => {
    server.use(
      http.get("*/posts", () => {
        return HttpResponse.json(null, { status: 500 });
      })
    );
    render(<Posts />);

    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });
});
