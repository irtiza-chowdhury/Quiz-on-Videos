import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import useVideoList from '../hooks/useVideoList';
import Video from './Video';

export default function Videos() {
  const [page, setpage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll dataLength={videos.length} hasMore={hasMore} next={() => setpage(page + 8)}>
          {videos.map((video, index) =>
            video.noq > 0 ? (
              <Link to={`/quiz/${video.youtubeID}`} state={{ videoTitle: video.title }} key={index}>
                <Video title={video.title} id={video.youtubeID} noq={video.noq} />
              </Link>
            ) : (
              <Video title={video.title} id={video.youtubeID} noq={video.noq} key={index} />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There is an error!</div>}
      {loading && <div> Loading... </div>}
    </div>
  );
}
