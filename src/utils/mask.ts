export type TinputMaskKeys = 'cnpj' | 'cnpj' | 'cep' | 'cpfCnpj' | 'phone'

const inputMasks = {
  cpf: '000.000.000-00',
  cnpj: '00.000.000/0000-00',
  cep: '00000-000',
  cpfCnpj: [{ mask: '000.000.000-00' }, { mask: '00.000.000/0000-00' }],
  phone: [{ mask: '(00) 0000-0000' }, { mask: '(00) 00000-0000' }],
}

export function setMask(mask?: TinputMaskKeys): any {
  if(mask) {
    return inputMasks[mask]
  }
}
