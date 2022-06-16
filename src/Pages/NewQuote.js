import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

export default function NewQuote(props) {
  const history = useHistory();
  const addQuoteHandler = (quotedata) => {
    props.addToDummy(quotedata);

    history.push("/quotes");
  };
  return (
    <>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </>
  );
}
