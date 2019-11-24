export enum Color {
  ORANGE = '#DB7D2F',
  ORANGE_1 = '#DE852B',
  ORANGE_2 = '#E18D27',
  ORANGE_3 = '#E39522',
  ORANGE_4 = '#E69D1E',
  ORANGE_5 = '#E9A51A',
  ORANGE_6 = '#ECAD16',
  ORANGE_7 = '#EEB511',
  YELLOW_1 = '#F1BD0D',
  YELLOW_2 = '#E4C141',
  YELLOW_3 = '#D8C475',
  LIGHT_GRAY = '#CBC8A9',
  LIGHT_GRAY_3 = '#A1B5BB',
  LIGHT_GRAY_4 = '#869DA7',
  LIGHT_GRAY_5 = '#6B8694',
  DARK_BLUE = '#35576D',
  DARK_BLUE_1 = '#424C5F',
  DARK_BLUE_2 = '#4E4151',
  DARK_BLUE_3 = '#5B3544',
  DARK_BLUE_4 = '#672A36',
  DARK_RED = '#741F28',
  DARK_RED_4 = '#4D151B',
  DARK_RED_5 = '#270A0D',
  BLACK = '#000000',
}

export class ColorHex {
  public val: string
  constructor(str: string) {
    this.val = str
  }
}

export const Colors = Object.values(Color).map((col) => new ColorHex(col))
