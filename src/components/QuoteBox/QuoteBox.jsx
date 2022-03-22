import { Component } from 'react';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
    };
    this.fetchQuote = this.fetchQuote.bind(this);
    this.changeQuote = this.changeQuote.bind(this);
  }

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote() {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => this.changeQuote(data.content, data.author));
  }

  changeQuote(quote, author) {
    this.setState({ quote, author });
  }

  render() {
    const { quote, author } = this.state;
    const twitterLink = `https://twitter.com/intent/tweet?hashtags=quotes&text="${quote}" - ${author}`;
    const tumblrLink = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${author}&content=${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons`;

    return (
      <div id="quote-box">
        <h1 id="text">{quote}</h1>
        <span id="author">{author}</span>
        <div id="buttons">
          <div id="share">
            <a
              href={twitterLink}
              target="_blank"
              rel="noreferrer"
              id="tweet-quote"
            >
              Tweet Quote
            </a>
            <a
              href={tumblrLink}
              target="_blank"
              rel="noreferrer"
              id="tumblr-quote"
            >
              Post Quote on Tumblr
            </a>
          </div>
          <button type="button" onClick={this.fetchQuote}>
            New quote
          </button>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
