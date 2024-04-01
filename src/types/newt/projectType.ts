import type { Content } from 'newt-client-js';

/**
 * プロジェクトタイプ
 */
export interface ProjectType extends Content {
  /**
   * プロジェクトタイプ名
   */
  name: string;

  /**
   * プロジェクトタイプのスラッグ
   */
  slug: string;
}