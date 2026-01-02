import React from "react";
import NoWishList from "./NoWishList";
import WishListsAllLists from "../../components/profile/WishListsAllLists";

export default function WishLists() {
  const wishLists = ["a"];
  if (wishLists.length === 0) {
    return <NoWishList />;
  }
  return (
    <div className="h-full bg-white rounded-xl ">
      <WishListsAllLists />
    </div>
  );
}
