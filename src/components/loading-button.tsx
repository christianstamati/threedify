import { Button, ButtonProps } from "@/components/ui/button";
import { PulseLoader } from "react-spinners";
import React from "react";
import { useTheme } from "next-themes";

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
  loadingText?: string;
}

function LoadingButton({ loading, loadingText, ...rest }: LoadingButtonProps) {
  const { theme } = useTheme();
  return (
    <Button disabled={loading} {...rest}>
      {loading ? (
        <div className="flex items-center gap-x-2">
          <PulseLoader
            size={8}
            color={`${theme === "light" ? "#ffffff" : "#000000"}`}
          />
          <span>{loadingText}</span>
        </div>
      ) : (
        rest.children
      )}
    </Button>
  );
}
export default LoadingButton;
