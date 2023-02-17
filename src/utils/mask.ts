export type TinputMaskKeys = 'cnpj' | 'cpf' | 'cep' | 'cpfCnpj' | 'phone'

const inputMasks = {
  cpf: [/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'-',/\d/,/\d/],
  cnpj: [/\d/,/\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'/',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/],
  cep: [/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/],
  cpfCnpj: {
    cpf: [/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/],
    cnpj: [/\d/,/\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'/',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/]
  },
  phone: {
    short: ['(',/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,/\d/,'-', /\d/,/\d/,/\d/,/\d/,/\d/],
    long: ['(',/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,/\d/,/\d/,'-', /\d/,/\d/,/\d/,/\d/]
  }
}

export function clearString(value: string): string {
  return value.replace(/[() -./]/g, '')
}

export function setMask(mask: TinputMaskKeys, value: string): any {
  if(mask === 'phone') {
    return clearString(value).length < 11 ? inputMasks[mask].short : inputMasks[mask].long
  }
  if(mask === 'cpf') {
    return inputMasks[mask]
  }
  if(mask === 'cnpj') {
    return inputMasks[mask]
  }
  if(mask === 'cpfCnpj') {
    return clearString(value).length < 12 ? inputMasks[mask].cpf : inputMasks[mask].cnpj
  }
  if(mask === 'cep') {
    return inputMasks[mask]
  }

  return []
}
