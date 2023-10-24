"use client";
import { useState } from "react";
import NextLink from "next/link";
import {
  Box,
  IconButton,
  Tooltip,
  Typography,
  CircularProgress,
} from "@mui/material";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";

// Services
// import { getObs, getObsBodega, getObsCotizacion } from "../../../services";

// Redux
// import { useAppDispatch, useAppSelector } from "../../../hooks";
// import { setModal, newNotification } from "../../../reducers";

// Interfaces
import { ContextTable } from "@/interfaces";

// uuid
import { v4 as uuid } from "uuid";

interface Props {
  title: string;
  numSelected: number;
  selected: string;
  to: string;
  context: ContextTable;
}

const TableToolbar = ({ title, numSelected, selected, to }: Props) => {
  const [loading, setLoading] = useState(false);
  const handle = () => {};

  return (
    <Box
      sx={{
        width: "100%",
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    >
      {numSelected > 0 ? (
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#112233",
            display: "flex",
            p: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" fontSize={14} fontWeight={600}>
            {numSelected === 1
              ? "1 seleccionado"
              : `${numSelected} seleccionados`}
          </Typography>
          {numSelected === 1 && (
            <Box
              sx={{
                display: "flex",
              }}
            >
              {/* {context.reviewClaim?.enabled && (
                <Tooltip title="Revisar">
                  <IconButton size="small" onClick={handleReviewClaim}>
                    <DoneAllIcon fontSize={isMobile ? "small" : "medium"} />
                  </IconButton>
                </Tooltip>
              )} */}
            </Box>
          )}
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            backgroundColor: "#001122",
            p: 2,
            border: "1px solid #112233",
          }}
        >
          <Typography variant="body2" fontSize={14} fontWeight={600}>
            {title}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export { TableToolbar };
