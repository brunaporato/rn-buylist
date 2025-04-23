import { FilterStatus } from "@/types/filterStatus";
import { Trash2 } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { StatusIcon } from "../StatusIcon";
import { styles } from "./styles";

interface ItemData {
  status: FilterStatus;
  description: string;
}

interface IItemProps {
  data: ItemData;
  onRemove: () => void
  onToggleStatus: () => void;
}

export function Item({ data, onRemove, onToggleStatus }: IItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onToggleStatus}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>
      <Text style={styles.description}>{data.description}</Text>
      <TouchableOpacity activeOpacity={0.8} onPress={onRemove}>
        <Trash2 size={18} color="#828282" />
      </TouchableOpacity>
    </View>
  );
}
