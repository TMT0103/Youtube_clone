import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "12px",
        background: "#1e293b",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 10px 25px rgba(56,189,248,0.25)",
        },
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{
            width: { xs: "100%", sm: "358px" },
            height: 180,
            borderRadius: "12px 12px 0 0",
          }}
        />
      </Link>

      <CardContent
        sx={{
          background: "linear-gradient(135deg,#1e293b,#0f172a)",
          height: "106px",
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{
              color: "#e2e8f0",
            }}
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            sx={{
              color: "#94a3b8",
              display: "flex",
              alignItems: "center",
              mt: 1,
            }}
          >
            {snippet?.channelTitle || demoChannelTitle}

            <CheckCircleIcon
              sx={{
                fontSize: "14px",
                color: "#38bdf8",
                ml: "5px",
              }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
