import { clearString } from '~/utils'
import { TinputMaskKeys } from '~/utils/mask'

export function useMask(value: string, typeMask?: TinputMaskKeys) {
  if (typeMask === 'phone') {
    return clearString(value).length < 11 ? '(##) ####-#####' : '(##) #####-####'
  }

  if (typeMask === 'cep') {
    return '#####-###'
  }

  if (typeMask === 'cpf') {
    return '###.###.###-###'
  }

  if (typeMask === 'cnpj') {
    return '##.###.###/####-##'
  }

  if (typeMask === 'cpfCnpj') {
    return clearString(value).length < 12 ? '###.###.###-###' : '##.###.###/####-##'
  }

  return ''

}
