import { Spinner } from "@/components/ui/spinner";

type LoadingButtonProps = {
  stat: string;
};

function LoadingButton({ stat }: LoadingButtonProps) {
  return (
    <>
      <Spinner />
      {stat}
    </>
  );
}

export default LoadingButton;
