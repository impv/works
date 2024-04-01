import type { Content } from 'newt-client-js';

/**
 * パートナー
 */
export interface Partner extends Content {
  /**
   * パートナー名
   */
  name: string;

  /**
   * パートナーのスラッグ
   */
  slug: string;

  /**
   * ウェブサイト
   */
  website?: string;
}