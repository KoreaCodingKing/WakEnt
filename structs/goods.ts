export type GoodsCategory =
  | 'Accessory'
  | 'Figure'
  | 'Record'
  | 'Tops'
  | 'Bottoms'

export enum GoodsCategoryEnum {
  Accessory = 'Accessory',
  Figure = 'Figure',
  Record = 'Record',
  Tops = 'Tops',
  Bottoms = 'Bottoms'
}

interface Item {
  name: string,
  price: string,
  buyLinks: string[],
  itemDesc: string,
  itemDetailImages: string[]
}

interface CategoryName {
  categoryName: string,
  bannerImage: string
}

export const itemCategory: Record<GoodsCategory, CategoryName> = {
  [GoodsCategoryEnum.Accessory]: {
    categoryName: '액세서리',
    bannerImage: ''
  },
  [GoodsCategoryEnum.Figure]: {
    categoryName: '피규어',
    bannerImage: ''
  },
  [GoodsCategoryEnum.Record]: {
    categoryName: '음반',
    bannerImage: ''
  },
  [GoodsCategoryEnum.Tops]: {
    categoryName: '상의',
    bannerImage: ''
  },
  [GoodsCategoryEnum.Bottoms]: {
    categoryName: '하의',
    bannerImage: ''
  },
}

export const items: Record<GoodsCategory, Item[]> = {
  [GoodsCategoryEnum.Accessory]: [],
  [GoodsCategoryEnum.Figure]: [],
  [GoodsCategoryEnum.Record]: [],
  [GoodsCategoryEnum.Tops]: [],
  [GoodsCategoryEnum.Bottoms]: []
};