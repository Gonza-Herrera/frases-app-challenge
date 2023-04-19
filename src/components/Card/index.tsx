import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface CardComponentProps {
  title: string;
}

export default function CardComponent({ title }: CardComponentProps) {
  return (
    <Card sx={{ width: 300, margin: "0 10px 10px", overflowX: "auto" }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, maxWidth: "100%" }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
