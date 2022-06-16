import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
// import Comments from "./components/comments/Comments";
import AllQuotes from "./Pages/AllQuotes";
import NewQuote from "./Pages/NewQuote";
import NotFound from "./Pages/NotFound";
import QuoteDetail from "./Pages/QuoteDetail";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is Fun" },
  { id: "q2", author: "Milan", text: "Learning React is Not Fun" },
  { id: "q3", author: "Ujjwal", text: " React is Not Fun" },
];

function App() {
  const [oldQuote, setOldQuotes] = useState(DUMMY_QUOTES);

  const printFirst = (data) => {
    const sdata = { ...data, id: `q${oldQuote.length + 1}` };
    // console.log();
    setOldQuotes([...oldQuote, sdata]);
  };
  console.log(oldQuote);
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Redirect to="/quotes" />
          </Route>
          <Route exact path="/quotes">
            <AllQuotes dummy={oldQuote} />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail DUMMY_QUOTES={oldQuote} />
          </Route>
          <Route path="/new-quote">
            <NewQuote addToDummy={printFirst} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
