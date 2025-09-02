import { RequestAccessCatalog, RequestAccessStatus } from "@/models/EpicApp";
import { Box, Button, Divider } from "@mui/material";
import { AccessLogSection } from "../LaunchAppTile/AccessLogSection";
import { BCDesignTokens } from "epic.theme";
import { LoadingButton } from "../Shared/LoadingButton";

type RequestAccessButton = {
  status: RequestAccessStatus;
};
const RequestAccessButton = ({ status }: RequestAccessButton) => {
  if (status === RequestAccessStatus.PENDING) {
    return (
      <Button
        variant="contained"
        fullWidth
        sx={{
          border: `1px solid ${BCDesignTokens.supportBorderColorWarning}`,
          backgroundColor: BCDesignTokens.supportSurfaceColorWarning,
        }}
      >
        Request Sent
      </Button>
    );
  }
  return (
    <LoadingButton
      variant="contained"
      fullWidth
      disabled={status === RequestAccessStatus.ACCESSED}
    >
      Request Access
    </LoadingButton>
  );
};

type BodyProps = {
  data: RequestAccessCatalog;
};
export const Body = ({ data }: BodyProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px 12px 12px 12px",
        gap: "8px",
      }}
    >
      <RequestAccessButton status={data.status} />
      <Box
        sx={{
          padding: "8px 0 12px 0",
        }}
      >
        <Divider
          sx={{
            width: "320px",
            backgroundColor: "#D1CFCD",
          }}
          aria-label="Bookmarks divider"
        />
      </Box>

      <Box width="100%">
        <AccessLogSection user={data.user} />
      </Box>
    </Box>
  );
};
