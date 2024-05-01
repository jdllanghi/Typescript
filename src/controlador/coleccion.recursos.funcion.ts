// src/utils/resource.collection.ts

import { escape } from "querystring";

class ColeccionRecursos<T> {
    private recursos: T[] = [];
  
    add(recursos: T): void {
      this.recursos.push(recursos);
      console.log(`Recurso conseguido: ${recursos}`);
    }
  
    getAll(): T[] {
      return this.recursos;
    }
  }
  escape
  
  export { ColeccionRecursos };
