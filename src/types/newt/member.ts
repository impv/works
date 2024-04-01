import type { Content } from 'newt-client-js';
import type { Domain } from './domain';
import type { TechnologyStack } from './technologyStack';

/**
 * メンバー
 */
export interface Member extends Content {
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
  domains?: Domain[];

  /**
   * 技術スタック
   */
  technologyStacks?: TechnologyStack[];
}