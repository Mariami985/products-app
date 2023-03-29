export abstract class VirtualStorage<T extends { id: number }> {
     private items: T[];
   
     constructor() {
       this.items = [];
     }
   
     add(item: T) {
       this.items.push(item);
     }
   
     remove(id: number) {
       this.items = this.items.filter((item) => item.id !== id);
     }
   
     update(id: number, updates: Partial<T>) {
       const index = this.items.findIndex((item) => item.id === id);
       if (index !== -1) {
         this.items[index] = { ...this.items[index], ...updates };
       }
     }
   
     find(query?: Partial<T>) {
       return this.items.filter((item) => {
         if (query) {
           for (const key in query) {
             if (item[key] !== query[key]) {
               return false;
             }
           }
         }
         return true;
       });
     }
   
     findOne(query?: Partial<T>) {
       return this.items.find((item) => {
         if (query) {
           for (const key in query) {
             if (item[key as keyof T] !== query[key as keyof T]) {
               return false;
             }
           }
         }
         return true;
       });
     }
}