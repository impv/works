/**
 * ファイル
 */
export interface File {
  /**
   * ファイルURL
   */
  src: string;

  /**
   * ファイル名
   */
  fileName: string;

  /**
   * ファイルの種類
   */
  fileType: string;

  /**
   * ファイルのサイズ
   */
  fileSize: number;

  /**
   * 幅
   */
  width?: number;

  /**
   * 高さ
   */
  height?: number;

  /**
   * タイトル
   */
  title: string;

  /**
   * 代替テキスト
   */
  altText: string;

  /**
   * 説明
   */
  description?: string;

  /**
   * メタデータ
   */
  metadata?: any;
}