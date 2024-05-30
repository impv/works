import type { Content } from 'newt-client-js';

import type { Ability } from './ability';

/**
 * 業務領域
 */
export interface Domain extends Content {
  /**
   * 業務領域名
   */
  name: string;

  /**
   * 業務領域のスラッグ
   */
  slug: string;

  /**
   * 説明
   */
  description?: string;

  /**
   * 能力
   */
  abilities?: Ability[];
}