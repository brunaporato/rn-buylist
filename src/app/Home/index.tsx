import { Image, TouchableOpacity, View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/filterStatus";
import { Item } from "@/components/Item";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];
const ITEMS = [
  { id: "1", description: "1 pacote de arroz", status: FilterStatus.DONE },
  {
    id: "2",
    description: "3 pacotes de macarrão",
    status: FilterStatus.PENDING,
  },
  { id: "3", description: "1 pacote de feijão", status: FilterStatus.PENDING },
  { id: "4", description: "1 pacote de açúcar", status: FilterStatus.DONE },
  { id: "5", description: "1 pacote de sal", status: FilterStatus.PENDING },
  { id: "6", description: "1 café", status: FilterStatus.DONE },
  { id: "7", description: "1l de leite", status: FilterStatus.PENDING },
  { id: "8", description: "5 pães", status: FilterStatus.DONE },
  { id: "9", description: "1 manteiga", status: FilterStatus.PENDING },
  { id: "10", description: "300g de queijo", status: FilterStatus.DONE },
  { id: "11", description: "150g de presunto", status: FilterStatus.PENDING },
  { id: "12", description: "1kg de peito de frango", status: FilterStatus.DONE },
];

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adicionar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}

          <TouchableOpacity activeOpacity={0.8} style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <Item
              data={item}
              onRemove={() => console.log("remover")}
              onToggleStatus={() => console.log("toggle status")}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (<Text style={styles.emptyText}>Nenhum item aqui</Text>)}
        />
      </View>
    </View>
  );
}
