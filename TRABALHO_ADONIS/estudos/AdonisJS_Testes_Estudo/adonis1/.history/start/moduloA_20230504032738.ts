import { storage } from './storage'
import ModuleB from './ModuleB'

export default class ModuleA {
  public async run() {
    console.log(storage.getStore())
    await (new ModuleB()).run()
  }
}
