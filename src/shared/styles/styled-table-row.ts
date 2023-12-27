import styled from "@emotion/styled";
import { TableRow } from "@mui/material";

const StyledTableRow = styled(TableRow)(() => ({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export { StyledTableRow };