import type { Content } from 'newt-client-js';

/**
 * クライアント
 */
export interface Client extends Content {
  /**
   * クライアント名
   */
  name: string;

  /**
   * クライアントのスラッグ
   */
  slug: string;

  /**
   * ウェブサイト
   */
  website?: string;

  /**
   * プロフィール
   */
  profile?: string;
}