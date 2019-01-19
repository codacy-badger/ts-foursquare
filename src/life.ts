interface ILifeResult {
  status: string
}

export const life = (): ILifeResult => ({ status: 'ok' })
