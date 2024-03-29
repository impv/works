import { type Client } from './client';
import { type Member } from './member';
import { type Domain } from './domain';
import { type TechnologyStack } from './technologyStack';
import { type ProjectType } from './projectType';
import { type Partner } from './partner';
import { type File } from './file';

/**
 * プロジェクトにおける役割とそのメンバー
 */
interface Role {
  /**
   * 役割
   */
  domain: Domain;

  /**
   * メンバー
   */
  members: Member[];
}

/**
 * コンテンツセクション
 */
interface Section {
  /**
   * セクションのタイトル
   */
  title: string;

  /**
   * 説明文
   */
  description?: string;

  /**
   * ビジュアル
   */
  visual?: File;
}

/**
 * プロジェクト
 */
export interface Work {
  /**
   * タイトル
   */
  title: string;

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
   * リリース日時
   */
  releaseDate?: Date;

  /**
   * 開発期間
   */
  productionPeriod?: string;

  /**
   * プロジェクトタイプ
   */
  projectTypes?: ProjectType;

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
  teams?: Role[];

  /**
   * ヒーロービジュアル
   */
  heroVisual?: File;

  /**
   * コンテンツセクション
   */
  sections?: Section[];
}
  