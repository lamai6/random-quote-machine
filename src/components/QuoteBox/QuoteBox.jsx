import { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import './QuoteBox.styles.scss';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      opacity: 1,
      timeoutId: '',
    };
    this.fetchQuote = this.fetchQuote.bind(this);
    this.changeQuote = this.changeQuote.bind(this);
  }

  componentDidMount() {
    this.fetchQuote();
  }

  componentWillUnmount() {
    const { timeoutId } = this.state;
    clearTimeout(timeoutId);
  }

  async fetchQuote() {
    const { changeColor } = this.props;
    changeColor();
    this.changeOpacity();

    await new Promise((resolve) => {
      const timeoutId = setTimeout(resolve, 300);
      this.setState({ timeoutId });
    });

    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        this.changeQuote(data.content, data.author);
        this.changeOpacity();
      });
  }

  changeQuote(quote, author) {
    this.setState({ quote, author });
  }

  changeOpacity() {
    this.setState((state) => ({ opacity: !state.opacity }));
  }

  render() {
    const { quote, author, opacity } = this.state;
    const { bgColor } = this.props;
    const twitterLink = `https://twitter.com/intent/tweet?hashtags=quotes&text="${quote}" - ${author}`;
    const tumblrLink = `https://tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${author}&content=${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons`;

    return (
      <div id="quote-box">
        <h1 className={opacity ? 'change' : ''} id="text">
          {quote}
        </h1>
        <p className={opacity ? 'change' : ''} id="author">
          {`- ${author}`}
        </p>
        <div id="buttons">
          <div id="share">
            <a
              href={twitterLink}
              style={{ backgroundColor: bgColor }}
              className="button"
              role="button"
              target="_blank"
              rel="noreferrer"
              id="tweet-quote"
            >
              <FontAwesomeIcon icon={brands('twitter')} size="lg" />
            </a>
            <a
              href={tumblrLink}
              style={{ backgroundColor: bgColor }}
              className="button"
              role="button"
              target="_blank"
              rel="noreferrer"
              id="tumblr-quote"
            >
              <FontAwesomeIcon icon={brands('tumblr')} size="lg" />
            </a>
          </div>
          <button
            type="button"
            style={{ backgroundColor: bgColor }}
            className="button"
            onClick={this.fetchQuote}
            id="new-quote"
          >
            New quote
          </button>
        </div>
      </div>
    );
  }
}

QuoteBox.propTypes = {
  bgColor: PropTypes.string.isRequired,
  changeColor: PropTypes.func.isRequired,
};

export default QuoteBox;
