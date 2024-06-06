import type { Content, Image } from 'newt-client-js';
import type { Domain } from './domain';
import type { Position } from './position';
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
   * 役職
   */
  positions?: Position[];

  /**
   * 技術スタック
   */
  technologyStacks?: TechnologyStack[];

  /**
   * プロフィール画像
   */
  portrait: Image;

  /**
   * 目を閉じた状態のプロフィール画像
   */
  portraitEyesClosed?: Image;
}