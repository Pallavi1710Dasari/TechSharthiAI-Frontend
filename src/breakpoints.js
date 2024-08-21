import { useMediaQuery } from "@mui/material";

export const useBreakpoint = () => {
   const isMobile =  useMediaQuery('(max-width:700px)')
   return isMobile
}