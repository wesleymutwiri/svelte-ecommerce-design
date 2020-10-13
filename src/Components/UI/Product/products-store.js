import { writable } from "svelte/store";

export const products = writable([
  {
    id: "p1",
    title: "A Book",
    price: 9.99,
    description: "A great book!",
    slug: "a-book",
  },
  {
    id: "p2",
    title: "A Carpet",
    price: 99.99,
    description: "Red and green.",
    slug: "a_carpet",
  },
  {
    id: "p3",
    title: "Test",
    price: 9.99,
    slug: "test",
  },
  {
    id: "p4",
    title: "Test",
    price: 9.99,
    slug: "test_4",
  },
]);
