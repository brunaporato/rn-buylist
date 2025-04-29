import { FilterStatus } from "@/types/filterStatus"
import AsyncStorage from "@react-native-async-storage/async-storage"

const ITEMS_STORAGE_KEY = "@rn-buylist:items"

export type ItemStorage = {
    id: string
    status: FilterStatus
    description: string
}

async function get() {
    try {
        const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY)
        return storage ? JSON.parse(storage) : []
        
    } catch (error) {
        throw new Error("GET_ITEMS: " + error)
    }
}

async function getByStatus(status: FilterStatus) {
    const items = await get()
    return items.filter((item: ItemStorage) => item.status === status)
}

async function save(items: ItemStorage[]) {
    try {
        await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items))
    } catch (error) {
        throw new Error("SAVE_ITEMS: " + error)
    }
}

async function add(newItem: ItemStorage) {
    const items = await get()
    const updatedItems = [...items, newItem]
    await save(updatedItems)

    return updatedItems
}


export const itemsStorage = {
    get,
    getByStatus,
    add,
}