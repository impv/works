import { type Domain } from './domain';
import { type TechnologyStack } from './technologyStack';

/**
 * メンバー
 */
export interface Member {
  /**
   * 名前
   */
  name: string;

  /**
   * メンバーのスラッグ
   */
  slug: string;

  /**
   * 専門領域
   */
  domain?: Domain[];

  /**
   * 技術スタック
   */
  technologyStack?: TechnologyStack[];
}