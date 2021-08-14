import React from "react";

import {
  UnorderedList as Ul,
  UnorderedListItem,
  OrderedList as Ol,
  OrderedListItem,
} from "../components";

export default {
  title: "components/List",
};

export const UnorderedList = () => (
  <Ul>
    <UnorderedListItem>Item 1</UnorderedListItem>
    <UnorderedListItem>Item 2</UnorderedListItem>
    <UnorderedListItem>Item 3</UnorderedListItem>
  </Ul>
);

export const OrderedList = () => (
  <Ol>
    <OrderedListItem>Item</OrderedListItem>
    <OrderedListItem>Item</OrderedListItem>
    <OrderedListItem>Item</OrderedListItem>
  </Ol>
);
