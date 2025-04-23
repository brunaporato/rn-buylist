import { FilterStatus } from "@/types/filterStatus";
import { CircleCheck, CircleDashed } from "lucide-react-native";

interface IStatusIconProps {
  status: FilterStatus;
}

export function StatusIcon({ status }: IStatusIconProps) {
  return status === FilterStatus.DONE ? (
    <CircleCheck size={18} color="#2C46B1" />
  ) : (
    <CircleDashed size={18} color="#000" />
  );
}
