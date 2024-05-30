import type { Content } from 'newt-client-js';

/**
 * 役職
 */
export interface Position extends Content {
  /**
   * 役職名
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