import React from "react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  HatenaShareButton,
  InstapaperShareButton,
  InstapaperIcon,
  LineShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PinterestIcon,
  PocketShareButton,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  ViberIcon,
  VKShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  WorkplaceShareButton,
  TwitterIcon,
  FacebookShareCount,
} from "react-share";

export const ShareLinks = ({ shareUrl }) => {
  // const shareUrl = "http://localhost:5173/job_details"; // URL you want to share

  return (
    <div className="share-popup gap-1 md:gap-4 items-center flex py-5">
      <p className="text-xs  lg:text-lg font-medium">Share With: </p>
      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TelegramShareButton url={shareUrl}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <WhatsappShareButton url={shareUrl}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <ViberShareButton url={shareUrl}>
        <ViberIcon size={32} round />
      </ViberShareButton>
      <EmailShareButton url={shareUrl}>
        <EmailIcon size={32} round />
      </EmailShareButton>
      <TwitterShareButton url={shareUrl}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      {/* <FacebookShareCount url={shareUrl}>
        {(shareCount) => <span>{shareCount}</span>}
      </FacebookShareCount> */}

      {/* <PinterestShareButton url={shareUrl}>
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <RedditShareButton url={shareUrl}>
        <RedditIcon size={32} round />
      </RedditShareButton> */}
    </div>
  );
};
