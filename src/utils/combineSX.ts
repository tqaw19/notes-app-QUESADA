import type { SxProps, Theme } from "@mui/material";

type MaybeSX = SxProps<Theme> | undefined | false;

export const combineSX = (SxArray: MaybeSX[]) =>
  [
    ...(Array.isArray(SxArray) ? SxArray.filter(Boolean) : [SxArray]),
  ] as SxProps<Theme>;
