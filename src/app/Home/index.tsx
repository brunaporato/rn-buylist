import { Image, TouchableOpacity, View, Text, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/filterStatus";
import { Item } from "@/components/Item";
import { useEffect, useState } from "react";
import { itemsStorage, ItemStorage } from "@/storage/itemsStorage";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];


export function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDING)
  const [description, setDescription] = useState("")
  const [items, setItems] = useState<ItemStorage[]>([])

  async function getItems() {
    try {
      const response = await itemsStorage.get()
      setItems(response)

    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível carregar os itens.")
    }
  }

  useEffect(() => {
    getItems()
  }, [])

  function handleAddItem() {
    if (!description.trim()) {
      return Alert.alert("Adicionar", "Informe a descrição para adicionar.")
    }

    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING
    }

    setItems((prevState) => [...prevState, newItem])
    setDescription("")
  }

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" onChangeText={setDescription} value={description} />
        <Button title="Adicionar" onPress={handleAddItem} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive={status === filter} onPress={() => setFilter(status)} />
          ))}

          <TouchableOpacity activeOpacity={0.8} style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={items}
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
