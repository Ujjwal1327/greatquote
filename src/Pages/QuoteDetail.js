import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

export default function QuoteDetail(props) {
  const params = useParams();
  const match = useRouteMatch();
  let quote = props.DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    quote = { text: "There is no any quote by this id", author: "Unknown" };
  }
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link to={`${match.path}/comments`} className="btn--flat">
            Add Comment
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
}
