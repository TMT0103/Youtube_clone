import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      const video = data.items[0];
      setVideoDetail(video);

      const channelId = video?.snippet?.channelId;

      // Fetch related videos
      fetchFromApi(
        `search?part=snippet&channelId=${channelId}&type=video&maxResults=50&order=date`,
      ).then((data) => setVideos(data.items));

      // Fetch comments
      fetchFromApi(
        `commentThreads?part=snippet&videoId=${id}&maxResults=20`,
      ).then((data) => setComments(data.items));
    });
  }, [id]);
  useEffect(() => {
    console.log("Video ID:", id); // Xem id có đúng không
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      console.log("Full data:", data);
      console.log("Statistics:", data.items[0]?.statistics);
      console.log("Snippet:", data.items[0]?.snippet);
      const video = data.items[0];
      setVideoDetail(video);

      const channelId = video?.snippet?.channelId;
      fetchFromApi(
        `search?part=snippet&channelId=${channelId}&type=video&maxResults=50`,
      ).then((data) => setVideos(data.items));
    });
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
  } = videoDetail;
  const { viewCount = 0, likeCount = 0 } = videoDetail?.statistics || {};

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        {/* LEFT SIDE */}
        <Box flex={1}>
          {/* VIDEO */}
          <Box sx={{ width: "100%" }}>
            <iframe
              width="100%"
              height="720px"
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              allowFullScreen
              title={title}
              style={{ borderRadius: "8px" }}
            />
          </Box>

          {/* VIDEO INFO */}
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {title}
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ color: "#fff" }}
            py={1}
            px={2}
          >
            <Link to={`/channel/${channelId}`}>
              <Typography variant="h6" color="#fff">
                {channelTitle}
                <CheckCircleIcon
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </Typography>
            </Link>

            <Stack direction="row" gap="20px">
              <Typography>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>

          {/* COMMENTS */}
          <Box p={2}>
            <Typography color="#fff" variant="h6" fontWeight="bold" mb={2}>
              Comments
            </Typography>

            {comments.map((comment) => {
              const {
                authorDisplayName,
                authorProfileImageUrl,
                textDisplay,
                likeCount,
                publishedAt,
              } = comment.snippet.topLevelComment.snippet;

              return (
                <Stack direction="row" gap={2} mb={3} key={comment.id}>
                  <img
                    src={authorProfileImageUrl}
                    alt={authorDisplayName}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />

                  <Box>
                    <Typography color="#fff" fontWeight="bold">
                      {authorDisplayName}
                    </Typography>

                    <Typography color="gray" variant="caption">
                      {new Date(publishedAt).toLocaleDateString()}
                    </Typography>

                    <Typography color="#ccc" mt={0.5}>
                      {textDisplay}
                    </Typography>

                    <Typography color="gray" variant="caption">
                      👍 {parseInt(likeCount).toLocaleString()}
                    </Typography>
                  </Box>
                </Stack>
              );
            })}
          </Box>
        </Box>

        {/* RIGHT SIDE - RELATED VIDEOS */}
        <Box px={2} py={{ md: 1, xs: 5 }}>
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
