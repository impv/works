import type { Content, File, Image } from 'newt-client-js';
import type { Client } from './client';
import type { Member } from './member';
import type { Domain } from './domain';
import type { TechnologyStack } from './technologyStack';
import type { ProjectType } from './projectType';
import type { Partner } from './partner';

/**
 * プロジェクト
 */
export interface Work extends Content {
  /**
   * id
   */
  _id: string;

  /**
   * タイトル
   */
  title: string;

  /**
   * サブタイトル
   */
  subtitle: string;

  /**
   * プロジェクトのスラッグ
   */
  slug: string;

  /**
   * プロジェクトの概要
   */
  outline?: string;

  /**
   * クライアント
   */
  client?: Client;

  /**
   * 代理店や共同開発先
   */
  partners?: Partner[];

  /**
   * URL
   */
  url?: string;

  /**
   * 開発期間
   */
  productionPeriod?: string;

  /**
   * プロジェクトタイプ
   */
  projectTypes?: ProjectType[];

  /**
   * 業務領域
   */
  domains?: Domain[];

  /**
   * 技術スタック
   */
  technologyStacks?: TechnologyStack[];

  /**
   * チーム
   */
  team?: Member[];

  /**
   * カバー画像
   */
  coverImage: Image;

  /**
   * ヒーロービジュアル
   */
  heroVisual?: File;

  /**
   * 動画・画像
   */
  visuals?: File[];
}
  