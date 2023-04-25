import React from "react";

import { ItemDetails } from "./ItemDetails";
import renderer from "react-test-renderer";

it("should render ItemDetails when it is liked", () => {
  const item = {
    id: 4,
    title: "Red fruits",
    author: "SamyRoad",
    price: 10,
    image: "https://picsum.photos/id/102/300",
    liked: true,
    likesCount: 7,
  };
  const tree = renderer.create(<ItemDetails item={item} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render ItemDetails when it is not liked", () => {
  const item = {
    id: 4,
    title: "Red fruits",
    author: "SamyRoad",
    price: 10,
    image: "https://picsum.photos/id/102/300",
    liked: false,
    likesCount: 0,
  };
  const tree = renderer.create(<ItemDetails item={item} />).toJSON();
  expect(tree).toMatchSnapshot();
});
