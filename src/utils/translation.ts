type IDefaultStatus = 'Sucesso' | 'Falhou' | 'Processando'

interface IGenericObject<T> {
  [id: string]: T;
}

const defaultStatus: IGenericObject<IDefaultStatus> = {
  success: 'Sucesso',
  fail: 'Falhou',
  proccess: 'Processando'
}

export const translateStatus = (type: string) => {
  return defaultStatus[type] ?? type
}
 
