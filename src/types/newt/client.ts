/**
 * クライアント
 */
export interface Client {
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