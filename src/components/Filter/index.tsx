import { FilterStatus } from "@/types/filterStatus";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { StatusIcon } from "../StatusIcon";

interface IFilterProps extends TouchableOpacityProps {
  status: FilterStatus;
  isActive?: boolean;
}

export function Filter({ status, isActive = false, ...props }: IFilterProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
      {...props}
    >
      <StatusIcon status={status} />
      <Text style={styles.title}>
        {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
      </Text>
    </TouchableOpacity>
  );
}
