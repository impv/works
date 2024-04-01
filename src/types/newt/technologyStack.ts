import type { Content } from 'newt-client-js';

/**
 * 技術スタック
 */
export interface TechnologyStack extends Content {
  /**
   * 技術スタック名
   */
  name: string;

  /**
   * 技術スタックのスラッグ
   */
  slug: string;
}