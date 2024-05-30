import type { Content } from 'newt-client-js';

/**
 * 能力
 */
export interface Ability extends Content {
  /**
   * 能力名
   */
  name: string;

  /**
   * スラッグ
   */
  slug: string;

  /**
   * 説明
   */
  description: string;
}