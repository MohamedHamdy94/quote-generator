import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import './App.css';
import React, { useState } from 'react';

const App = () => {
  const url = 'https://api.quotable.io/random';
  let quoteData = {
    content: 'Let time be your only competitor.',
    author: 'Ahmed Saber',
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + ' once said: ' + quote.content
    );
    alert('copied');
  };

  const shareUrl = window.location.href;
  const title = 'quote generator';
  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div className="Demo__some-network">
          <FacebookShareButton url={shareUrl} >
            <FacebookIcon size={32} round />
          </FacebookShareButton>{' '}
          <TwitterShareButton url={shareUrl} title={title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>{' '}
          <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>{' '}
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
      </div>
    </>
  );
};

export default App;
