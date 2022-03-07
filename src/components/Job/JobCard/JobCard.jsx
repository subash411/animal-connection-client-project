import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// React components

// MUI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function JobCard({ job }) {
  // Dispatch hook
  const dispatch = useDispatch();

  //  MUI modal setup for detail view
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  // Modal style setup
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    width: "80%",
    height: "80%",
    p: 4,
    overflow: "scroll",
    padding: 3,
  };

  return (
    <Card key={job.id} sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() => {
          setOpen(true);
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
            {job.client}-{job.jobNumber}
          </Typography>
          <Typography variant="h5" component="div">
            {job.notes}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
        </CardContent>
        {job.description}
        <CardContent>
          <Typography gutterBottom noWrap variant="h6" component="div">
            {job.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default JobCard;