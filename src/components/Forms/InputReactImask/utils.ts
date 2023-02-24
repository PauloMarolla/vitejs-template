import { TinputMaskKeys } from '~/utils/mask'

const imasks = {
  phone: [{ mask: '(00) 0000-0000' }, { mask: '(00) 00000-0000' }],
  cep: '00000-000',
  cpf: '000.000.000-00',
  cnpj: '00.000.000/0000-00',
  cpfCnpj: [{ mask: '000.000.000-00' }, { mask: '00.000.000/0000-00' }],
}

export function useMask(typeMask?: TinputMaskKeys) {
  if (typeMask === 'phone') {
    return imasks.phone
  }

  if (typeMask === 'cep') {
    return imasks.cep
  }

  if (typeMask === 'cpf') {
    return imasks.cpf
  }

  if (typeMask === 'cnpj') {
    return imasks.cnpj
  }

  if (typeMask === 'cpfCnpj') {
    return imasks.cpfCnpj
  }

  return '99'

}
