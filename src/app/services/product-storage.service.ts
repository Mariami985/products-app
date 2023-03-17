import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductStorageService  {
  getadd(): any {
    throw new Error('Method not implemented.');
  }
    private items:any[]
  
  constructor() {
    this.items = []
  }

  add(item:any){
    this.items.push(item)
  }
  remove(id: number){
    this.items = this.items.filter((item) =>item.id !== id)
  }
  update (id: number, updates:any){
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
         this.items[index] = { ...this.items[index], ...updates };
    }
  }
  find(query:any) {
    return this.items.filter((item) => {
      for (const key in query) {
        if (item[key] !== query[key]) {
          return false;
        }
      }
      return true;
    });
  }
  findOne(query:any) {
    return this.items.find((item) => {
      for (const key in query) {
        if (item[key] !== query[key]) {
          return false;
        }
      }
      return true;
    });
  }
}

const data = new ProductStorageService()
data.add( 
  {
    id: 1,
    type: 'box',
    title: 'Pizza storage box',
    description: 'description 1',
    price: 10,
    quantity: 0
   },
),
data.add({
    id: 2,
    type: 'container',
    title: 'Disposable food storage container',
    description: 'description 2',
    price: 0.15,
    quantity: 0
  },
),
data.add( {
    id: 3,
    type: 'dishes',
    title: 'Disposable forks, spoons, plates',
    description: 'description 3',
    price: 0.02,
    quantity: 0
  },
),
data.add({
    id: 4,
    type: 'cup',
    title: 'Disposable paper cups',
    description: 'description 4',
    price: 0.03,
    quantity: 0
  }
)

console.log(data);

data.update(4, {
  quantity : 12000,
});

console.log(data)

const typeItem = data.find({ type: "box"});

console.log(typeItem);

data.remove(2);

console.log(data)

