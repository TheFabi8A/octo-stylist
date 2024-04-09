import { useContext } from "react";
import { Context } from "../../../Context";

export { default as UserCard } from "./UserCard";

export const Index = () => {
  const { dataUser } = useContext(Context);
  const { created_at, blog } = dataUser;

  const create_at_date = new Date(created_at);

  const day = create_at_date.getDate();
  const month = create_at_date.toLocaleString("default", { month: "short" });
  const year = create_at_date.getFullYear();

  const CREATE_AT = `${month} ${day}, ${year}`;

  if (blog) {
    blog.replace(/^https?:\/\//, "");
  }

  const WEBSITE = blog;

  return { WEBSITE, CREATE_AT };
};
