import React from "react";
import BookInfo from "../components/BookInfo";
import { useParams } from "react-router-dom";
import API from "../API/APIUtils";

export default function Book() {
  let id = useParams();
  return <BookInfo></BookInfo>;
}
