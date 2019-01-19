import { life } from '../life'

test('life', () => {
  expect(life()).toEqual({ status: 'ok' })
  expect(life()).toMatchSnapshot()
})
