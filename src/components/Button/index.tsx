import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface IButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...props }: IButtonProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...props}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
