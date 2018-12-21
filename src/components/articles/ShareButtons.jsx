import React from 'react';
import PropTypes from 'prop-types';
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { prepareUrl } from 'utils/helpers';

const ShareButtons = ({ article }) => {
  const { slug, title } = article;
  const url = prepareUrl(`articles/${slug}`);

  return (
    <div className="social-buttons">
      <div>
        <FacebookShareButton url={url} quote={title}>
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className="social animated"
            size="2x"
            style={{ color: '#3b5998' }}
          />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title} via="AuthorsHaven">
          <FontAwesomeIcon
            icon={faTwitterSquare}
            className="social animated"
            size="2x"
            style={{ color: '#38A1F3' }}
          />
        </TwitterShareButton>
        <EmailShareButton
          url={url}
          body={`${title} Link to: ${url} Shared Via: Authors Haven `}
          subject={title}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="social animated"
            size="2x"
            style={{ color: 'red' }}
          />
        </EmailShareButton>
      </div>
    </div>
  );
};

ShareButtons.propTypes = {
  article: PropTypes.object,
};
export default ShareButtons;
