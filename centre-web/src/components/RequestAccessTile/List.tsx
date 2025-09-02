import { RequestAccessCatalog } from "@/models/EpicApp";
import { Grid } from "@mui/material";
import { RequestAccessTile } from ".";

type ListProps = {
  items: RequestAccessCatalog[];
};
export const List = ({ items }: ListProps) => {
  return (
    <Grid container spacing={2} direction={"row"}>
      {items.map((item) => (
        <Grid item key={item.id}>
          <RequestAccessTile data={item} />
        </Grid>
      ))}
    </Grid>
  );
};
