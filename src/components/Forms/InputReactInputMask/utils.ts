import { clearString } from '~/utils'
import { TinputMaskKeys } from '~/utils/mask'

export function useMask(value: string, typeMask?: TinputMaskKeys) {
  if (typeMask === 'phone') {
    return clearString(value).length < 11 ? '(99) 9999-99999' : '(99) 99999-9999'
  }

  if (typeMask === 'cep') {
    return '99999-999'
  }

  if (typeMask === 'cpf') {
    return '999.999.999-99'
  }

  if (typeMask === 'cnpj') {
    return '99.999.999/9999-99'
  }

  if (typeMask === 'cpfCnpj') {
    return clearString(value).length < 12 ? '999.999.999-999' : '99.999.999/9999-99'
  }

  return ''

}
