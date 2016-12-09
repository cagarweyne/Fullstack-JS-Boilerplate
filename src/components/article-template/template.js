import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import  { docco }  from 'react-syntax-highlighter/dist/styles';
import { Link } from 'react-router';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

export default class ES6Introduction extends Component {
  render() {
    //code strings

    const {
      FacebookShareButton,
      LinkedinShareButton,
      TwitterShareButton
    } = ShareButtons;

    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const LinkedinIcon = generateShareIcon('linkedin');

    const url = 'http://www.fullstackstudent.com/';
    const title = '';
    const description = '';

    return (
      <div>
        <section className="section blog fss-article">
          <div className="container">
            <div className="columns is-mobile">
              <div className="column is-8 is-offset-2">
                <h3 className="title is-3 has-text-centered"><strong>Title</strong></h3>
                <div className="box content blog-post">

                  <h4 className="title is-3 "><strong>Subtitle</strong></h4>
                  <SyntaxHighlighter language='javascript' style={docco} showLineNumbers>{codeString1}</SyntaxHighlighter><br />

                  <div className="social-btn-container">
                    <div className="columns ">
                      <div className="column is-offset-1">
                      <span>
                        <FacebookShareButton
                          url={url}
                          title={title}
                          description={description}
                          className="Demo__some-network__share-button">
                          <FacebookIcon
                            size={32}
                            round />
                        </FacebookShareButton>
                        </span>
                      </div>
                      <div className="column">
                        <span>
                        <TwitterShareButton
                          url={url}
                          title={title}
                          description={description}
                          className="Demo__some-network__share-button">
                        <TwitterIcon
                          size={32}
                          round />
                        </TwitterShareButton>
                    </span>
                      </div>
                      <div className="column">
                        <span>
                          <LinkedinShareButton
                            url={url}
                            title={title}
                            description={description}
                            windowWidth={750}
                            windowHeight={600}
                            className="Demo__some-network__share-button">
                            <LinkedinIcon
                              size={32}
                              round />
                          </LinkedinShareButton>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="columns ">
                    <div className="column is-half">
                      <p><span>Next </span> <span><i className="fa fa-hand-o-right next-icon" aria-hidden="true"> </i>:</span> <span>Next article</span></p>
                    </div>
                    <div className="column is-half">
                      <p><a href="/es6">ES6 JavaScript Reloaded Menu</a></p>
                    </div>
                  </div>
                </div>
                <div className="card is-fullwidth">
                  <header className="card-header">
                    <p className="card-header-title">
                      About the author
                    </p>
                    <a className="card-header-icon" href="#top">
                      <i className="fa fa-angle-up"> </i>
                    </a>
                  </header>
                  <div className="card-content">
                    <article className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                          <img className="profile-pic" src="/abdi_profile.jpg" alt="Image" width="128px" height="128px"/>
                        </figure>
                      </div>
                      <div className="media-content">
                        <div className="content">
                          <p>
                            <strong>Abdi Cagarweyne</strong> <small><a href="https://twitter.com/cagaarweyne" target="_blank">@cagarweyne</a></small>
                            <br />
                            Abdi is a FullStack JavaScript Developer from London, UK. He loves writing code and solving real world problems. When not coding, Abdi likes breaking down complex concepts and teach them to others. You can follow Abdi on <a href="https://twitter.com/cagaarweyne" target="_blank">Twitter.</a>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    );
  }
}
