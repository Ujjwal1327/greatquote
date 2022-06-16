import React from "react";
import QuoteList from "../components/quotes/QuoteList";

export default function AllQuotes(props) {
  // console.log(props.dummy);
  return (
    <>
      <QuoteList quotes={props.dummy} />
    </>
  );
}
