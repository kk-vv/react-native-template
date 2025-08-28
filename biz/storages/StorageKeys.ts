const storagePrefix = 'ai.lana.app.copytrading'

export enum StorageKeysType {
  userDatas = 'user.datas.v1',
  systemConfig = 'user.systemconfig'
}

export namespace StorageKeysType {
  export function key(typeKey: StorageKeysType) {
    return `${storagePrefix}.${typeKey}`
  }
}