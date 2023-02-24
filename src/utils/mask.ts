export type TinputMaskKeys = 'cnpj' | 'cpf' | 'cep' | 'cpfCnpj' | 'phone'

export function clearString(value: string): string {
  return value.replace(/[() -./]/g, '')
}
