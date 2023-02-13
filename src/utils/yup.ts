import { setLocale } from 'yup'

setLocale({
  mixed: {
    default: 'O campo é inválido',
    required: 'Este campo é obrigatório',
    oneOf: 'Este campo deve ser um dos seguintes valores: ${values}',
    notOneOf: 'Este campo não deve ser um dos seguintes valores: ${values}',
    notNull: 'Este campo não deve ser nulo',
  },
  date: {
    min: 'Este campo deve ser maior que a data ${min}',
    max: 'Este campo deve ser menor que a data ${max}'
  },
  string: {
    length: 'Este campo deve ter exatamente ${length} caracteres',
    min: 'Este campo deve ter pelo menos ${min} caracteres',
    max: 'Este campo deve ter no máximo ${max} caracteres',
    email: 'Este campo tem o formato de e-mail inválido',
    url: 'Este campo deve ter um formato de URL válida',
    trim: 'Este campo não deve conter espaços no início ou no fim.',
    lowercase: 'Este campo deve estar em maiúsculo',
    uppercase: 'Este campo deve estar em minúsculo',
    matches: 'Este campo não tem um formato válido',
  },
  number: {
    min: 'Este campo deve ser no mínimo ${min}',
    max: 'Este campo deve ser no máximo ${max}',
    lessThan: 'Este campo deve ser menor que ${less}',
    moreThan: 'Este campo deve ser maior que ${more}',
    positive: 'Este campo deve ser um número posítivo',
    negative: 'Este campo deve ser um número negativo',
    integer: 'Este campo deve ser um número inteiro'
  },
  array: {
    min: 'Este campo deve ter no mínimo ${min} itens',
    max: 'Este campo deve ter no máximo ${max} itens',
    length: 'Este campo deve ${length} items'
  },
})
